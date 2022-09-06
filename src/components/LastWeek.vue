<script>
export default {
  props: {
    lastWeek: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleTodayState(day) {
      day.state = day.state === null ? true : null;
    },
  },
};
</script>

<template>
  <ul class="habit__week">
    <li v-for="(day, index) in lastWeek" :key="day.date">
      <button
        v-if="index === 0"
        @click="toggleTodayState(day)"
        :class="{ 'habit__day-success': day.state === true }"
        class="habit__day habit__today"
      >
        <span v-show="day.state === true">{{ day.date.getDate() }}</span>
      </button>
      <span
        v-else
        class="habit__day"
        :class="{
          'habit__day-success': day.state === true,
          'habit__day-failure': day.state === false,
        }"
      >
        {{ day.date.getDate() }}
      </span>
    </li>
  </ul>
</template>

<style>
.habit__week {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: reverse;
  justify-content: space-between;
}
.habit__day {
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  color: #d1d1d1;

  border: 2px solid #d1d1d1;
  border-radius: 50%;

  font-size: 16px;
}
.habit__today {
  border: 2px solid #3a3a3a;
}
.habit__today:hover {
  border-color: #1ac049;
  cursor: pointer;
}
.habit__day-success {
  border-color: #1ac049;
  color: #1ac049;
}
.habit__day-failure {
  border-color: #d64f67;
  color: #d64f67;
}
.habit__day-disabled {
  border-color: #e5e5e5;
}
</style>
