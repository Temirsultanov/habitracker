import { isToday } from "./date.js";
import { habits as habitsFromServer } from "./habits.js";
import { ref } from "vue";

let habits = ref(habitsFromServer);

function fillDaysToToday(days) {
  let lastDay = days[days.length - 1].date;
  while (!isToday(lastDay)) {
    const year = lastDay.getFullYear();
    const month = lastDay.getMonth();
    const date = lastDay.getDate() + 1;

    const nextDay = {
      date: new Date(year, month, date),
      state: false,
    };
    days.push(nextDay);
    lastDay = days[days.length - 1].date;
  }

  days[days.length - 1].state = null;
}
function daysStatesFromNullToFalse(days) {
  days.map((day) => {
    if (day.state === null) {
      day.state = false;
    }
  });
}
function fillHabitsAfterDisuse(habits) {
  habits.value.map(({ days }) => {
    const lastDay = days[days.length - 1];
    if (isToday(lastDay.date)) return;

    daysStatesFromNullToFalse(days);
    fillDaysToToday(days);
  });
}

export function getHabitList() {
  // simulation of waiting
  return new Promise((resolve) => {
    setTimeout(() => resolve(habits), 300);
  });
}

export function addHabit(newHabitName) {
  let id;
  if (habits.value.length) {
    const lastDay = habits.value[habits.value.length - 1];
    id = lastDay.id + 1;
  } else {
    id = 1;
  }
  const newDate = new Date();
  const newHabit = {
    id: id,
    name: newHabitName,
    beginDay: newDate,
    days: [
      {
        date: newDate,
        state: null,
      },
    ],
  };
  habits.value.push(newHabit);
}

export function getHabitById(id) {
  const habit = habits.value.find((habit) => habit.id === id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(habit);
    }, 100);
  });
}

export function deleteHabitById(id) {
  habits.value = habits.value.filter((habit) => habit.id !== id);
}

export function changeHabitNameById(id, newHabitName) {
  const habit = habits.value.find((habit) => habit.id === id);
  if (habit) habit.name = newHabitName;
}

fillHabitsAfterDisuse(habits);
