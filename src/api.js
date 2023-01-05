import { isToday } from "./date.js";
import { createClient } from "@supabase/supabase-js";
import { ref } from "vue";

function formatDate(date) {
  const year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();

  if (month < 9) month = "0" + (month + 1);
  else month = month + 1;

  if (day < 9) day = "0" + day;

  return `${year}-${month}-${day}`;
}

async function fillDaysToToday(habit) {
  let lastDay = habit.days[habit.days.length - 1].date;
  while (!isToday(lastDay)) {
    const year = lastDay.getFullYear();
    const month = lastDay.getMonth();
    const date = new Date(year, month, lastDay.getDate() + 1);
    const formattedDate = formatDate(date);
    const nextDay = {
      habit_id: habit.id,
      date: formattedDate,
      is_done: false,
    };
    lastDay = date;
    await supabase.from("days").insert(nextDay);
  }

  const { data } = await supabase
    .from("days")
    .select("id, date, is_done")
    .eq("habit_id", habit.id);

  habit.days = data;
}
async function fillHabitsAfterDisuse(habits) {
  for (let i = 0; i < habits.value.length; i++) {
    const habit = habits.value[i];
    const lastDay = habit.days[habit.days.length - 1];
    if (isToday(lastDay.date)) continue;
    await fillDaysToToday(habit);
  }
}

const USER_ID = 1;
/* eslint-disable-next-line */
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bXhhZGJka25vdG5vdW5menJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ2Mzg3ODQsImV4cCI6MTk4MDIxNDc4NH0.0A7EjzGUU0vW09uBDRNrEZvDej7kKefmuAlEg_riDes";
const supabaseURL = "https://vxmxadbdknotnounfzrp.supabase.co";
const supabase = createClient(supabaseURL, supabaseKey);
let habits = ref([]);
let habit = ref({});
let deleting = false;

export async function getHabitList() {
  if (deleting) return habits;

  const { data } = await supabase
    .from("habits")
    .select("id, title, begin_day")
    .eq("user_id", USER_ID);

  for (const habit of data) {
    habit.begin_day = new Date(habit.begin_day);
    const { data: days } = await supabase
      .from("days")
      .select("id, date, is_done")
      .eq("habit_id", habit.id);

    habit.days = days;
    habit.days.forEach((day) => (day.date = new Date(day.date)));
  }
  habits.value = data;
  await fillHabitsAfterDisuse(habits);
  for (const habit of habits.value) {
    habit.days.forEach((day) => (day.date = new Date(day.date)));
  }
  return habits;
}

export async function addHabit(newHabitTitle) {
  const date = new Date();
  const formattedDate = formatDate(date);

  const { data: habitIdRow } = await supabase
    .from("habits")
    .select("id")
    .order("id", { ascending: false })
    .limit(1);
  const habitId = habitIdRow[0] ? habitIdRow[0].id + 1 : 1;

  const { data: dayIdRow } = await supabase
    .from("days")
    .select("id")
    .order("id", { ascending: false })
    .limit(1);
  const dayId = dayIdRow[0] ? dayIdRow[0].id + 1 : 1;

  habits.value.push({
    id: habitId,
    title: newHabitTitle,
    begin_day: date,
    days: [{ id: dayId, date: date, is_done: false }],
  });

  const newHabit = {
    id: habitId,
    user_id: USER_ID,
    title: newHabitTitle,
    begin_day: formattedDate,
  };

  await supabase.from("habits").insert(newHabit);
  await supabase.from("days").insert({
    id: dayId,
    habit_id: habitId,
    date: formattedDate,
    is_done: false,
  });

  return habits.value;
}

export async function getHabitById(id) {
  const { data } = await supabase
    .from("habits")
    .select("id, title, begin_day")
    .eq("id", id);

  habit.value = data[0];
  const { data: days } = await supabase
    .from("days")
    .select("date, is_done")
    .eq("habit_id", habit.value.id);

  habit.value.days = days;
  habit.value.days.forEach((day) => (day.date = new Date(day.date)));
  habit.value.begin_day = new Date(habit.value.begin_day);
  await fillDaysToToday(habit.value);
  habit.value.days.forEach((day) => (day.date = new Date(day.date)));
  return habit;
}

export async function deleteHabitById(id) {
  deleting = true;
  habits.value = null;
  await supabase.from("days").delete().eq("habit_id", id);
  await supabase.from("habits").delete().eq("id", id);
  deleting = false;
  getHabitList();
}

export async function changeHabitTitleById(id, newHabitTitle) {
  habit.value.title = newHabitTitle;
  await supabase.from("habits").update({ title: newHabitTitle }).eq("id", id);
}

export async function toggleTodayStateByDayId(id, state) {
  await supabase.from("days").update({ is_done: state }).eq("id", id);
}
