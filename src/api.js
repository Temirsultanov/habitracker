import { isToday } from "./date.js";
import { createClient } from "@supabase/supabase-js";
import { ref } from "vue";
import router from "./router/index.js";

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
  if (habit.days.length === 0) {
    await supabase.from("days").insert({
      habit_id: habit.id,
      date: formatDate(new Date()),
      is_done: false,
    });
  } else {
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
  }

  const { data } = await supabase
    .from("days")
    .select("id, date, is_done")
    .eq("habit_id", habit.id)
    .order("date");

  habit.days = data;
}
async function fillHabitsAfterDisuse(habits) {
  for (let i = 0; i < habits.length; i++) {
    const habit = habits[i];

    const isDaysFull = habit.days.length !== 0;
    if (isDaysFull) {
      const lastDay = habit.days[habit.days.length - 1].date;
      if (isToday(lastDay)) continue;
    }

    await fillDaysToToday(habit);
  }
}

let userId = null;
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
  const { data: newHabits } = await supabase
    .from("habits")
    .select("id, title, begin_day");

  for (const habit of newHabits) {
    habit.begin_day = new Date(habit.begin_day);
    const { data: days } = await supabase
      .from("days")
      .select("id, date, is_done")
      .eq("habit_id", habit.id)
      .order("date");

    habit.days = days;
    habit.days.forEach((day) => (day.date = new Date(day.date)));
  }

  await fillHabitsAfterDisuse(newHabits);
  for (const habit of newHabits) {
    habit.days.forEach((day) => (day.date = new Date(day.date)));
  }

  habits.value = newHabits;
  return habits;
}

export async function addNewHabit(newHabitTitle) {
  const date = new Date();
  const formattedDate = formatDate(date);
  const newHabit = {
    user_id: userId,
    title: newHabitTitle,
    begin_day: formattedDate,
  };

  await supabase.from("habits").insert(newHabit);
  const habits = await getHabitList();
  return habits;
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
    .eq("habit_id", habit.value.id)
    .order("date");

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

export async function createNewUser(email, password) {
  await supabase.auth.signUp({ email, password });
}

export async function signIn(email, password) {
  await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function logOut() {
  await supabase.auth.signOut();
}

supabase.auth.onAuthStateChange(async (event) => {
  if (event === "SIGNED_IN") {
    router.push("/");
    const { data } = await supabase.auth.getUser();
    userId = data.user.id;
  }

  if (event === "SIGNED_OUT") {
    router.push("/signin");
  }
});

export async function checkPermission() {
  const { data } = await supabase.auth.getUser();
  if (data.user === null) {
    router.push("/signup");
    return false;
  }

  return true;
}

export async function getMyEmail() {
  const { data } = await supabase.auth.getUser();
  return data.user.email;
}
