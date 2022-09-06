import { isCurrentDay } from "./date.js";

let habits = [
  {
    id: 1,
    name: "Час английского",
    beginDay: new Date(2022, 7, 27),
    days: [
      {
        date: new Date(2022, 7, 27),
        state: true,
      },
      {
        date: new Date(2022, 7, 28),
        state: true,
      },
      {
        date: new Date(2022, 7, 29),
        state: true,
      },
      {
        date: new Date(2022, 7, 30),
        state: true,
      },
      {
        date: new Date(2022, 7, 31),
        state: false,
      },
      {
        date: new Date(2022, 8, 1),
        state: true,
      },
      {
        date: new Date(2022, 8, 2),
        state: true,
      },
    ],
  },
  {
    id: 2,
    name: "Мёд с утра натощак",
    beginDay: new Date(2022, 7, 27),
    days: [
      {
        date: new Date(2022, 7, 27),
        state: true,
      },
      {
        date: new Date(2022, 7, 28),
        state: true,
      },
      {
        date: new Date(2022, 7, 29),
        state: true,
      },
      {
        date: new Date(2022, 7, 30),
        state: true,
      },
      {
        date: new Date(2022, 7, 31),
        state: true,
      },
      {
        date: new Date(2022, 8, 1),
        state: true,
      },
    ],
  },
  {
    id: 3,
    name: "Спать раньше 22:00",
    beginDay: new Date(2022, 5, 26),
    days: [
      {
        date: new Date(2022, 5, 26),
        state: true,
      },
      {
        date: new Date(2022, 5, 27),
        state: true,
      },
      {
        date: new Date(2022, 5, 28),
        state: true,
      },
      {
        date: new Date(2022, 5, 29),
        state: true,
      },
      {
        date: new Date(2022, 5, 30),
        state: true,
      },
      {
        date: new Date(2022, 6, 1),
        state: true,
      },
      {
        date: new Date(2022, 6, 2),
        state: true,
      },
    ],
  },
  {
    id: 4,
    name: "10 слов на арабском",
    beginDay: new Date(2022, 7, 27),
    days: [
      {
        date: new Date(2022, 7, 27),
        state: true,
      },
      {
        date: new Date(2022, 7, 28),
        state: true,
      },
      {
        date: new Date(2022, 7, 29),
        state: true,
      },
      {
        date: new Date(2022, 7, 30),
        state: true,
      },
      {
        date: new Date(2022, 7, 31),
        state: true,
      },
      {
        date: new Date(2022, 8, 1),
        state: true,
      },
      {
        date: new Date(2022, 8, 2),
        state: null,
      },
    ],
  },
  {
    id: 5,
    name: "50 отжиманий",
    beginDay: new Date(2022, 7, 29),
    days: [
      {
        date: new Date(2022, 7, 29),
        state: true,
      },
      {
        date: new Date(2022, 7, 30),
        state: true,
      },
      {
        date: new Date(2022, 7, 31),
        state: true,
      },
      {
        date: new Date(2022, 8, 1),
        state: true,
      },
      {
        date: new Date(2022, 8, 2),
        state: true,
      },
    ],
  },
];

function fillDaysToToday(days) {
  let lastDay = days[days.length - 1].date;
  while (!isCurrentDay(lastDay)) {
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
function daysStateFromNullToFalse(days) {
  days.map((day) => {
    if (day.state === null) {
      day.state = false;
    }
  });
}

habits.map(({ days }) => {
  const lastDay = days[days.length - 1];
  if (isCurrentDay(lastDay.date)) return;

  daysStateFromNullToFalse(days);
  fillDaysToToday(days);
});

export function getHabitList() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(habits), 0);
  });
}

export function addHabit(habitName) {
  const newDate = new Date();
  const newHabit = {
    id: habits.length ? habits[habits.length - 1].id + 1 : 1,
    name: habitName,
    beginDay: newDate,
    days: [
      {
        date: newDate,
        state: null,
      },
    ],
  };
  habits.push(newHabit);
}

export function getHabitById(id) {
  return habits.find((habit) => habit.id === id);
}

export function deleteHabitById(id) {
  habits = habits.filter((habit) => habit.id !== id);
}
