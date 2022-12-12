<script>
import { toggleTodayStateByDayId } from "../api.js";

export default {
  props: {
    lastWeek: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleTodayState(day) {
      day.is_done = day.is_done === false || day.is_done === null ? true : null;
      toggleTodayStateByDayId(day.id, day.is_done === null ? false : true);
    },
  },
};
</script>

<template>
  <ul class="lastWeek">
    <li v-for="(day, index) in lastWeek" :key="day.date">
      <button
        v-if="index === 0"
        @click="toggleTodayState(day)"
        :class="{ 'lastWeek__day-success': day.is_done === true }"
        class="lastWeek__day lastWeek__today"
        aria-label="Toggle Today State"
      >
        <span v-show="day.is_done === true" class="text-small">
          {{ day.date.getDate() }}
        </span>
      </button>
      <span
        v-else
        :class="{
          'lastWeek__day-success': day.is_done === true,
          'lastWeek__day-failure': day.is_done === false,
        }"
        class="lastWeek__day text-small"
      >
        {{ day.date.getDate() }}
      </span>
    </li>
  </ul>
</template>

<style>
.lastWeek {
  width: 100%;
  padding: var(--blockPadding);

  display: flex;
  flex-direction: reverse;
  justify-content: space-between;
}
.lastWeek__day {
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--white);
  color: var(--grey);

  border: 2px solid var(--grey);
  border-radius: 50%;
}
.lastWeek__today {
  border: 2px solid var(--black);
  padding: 0px;
}
.lastWeek__today:hover {
  border-color: var(--green);
  cursor: pointer;
}
.lastWeek__day-success {
  border-color: var(--green);
  color: var(--green);
}
.lastWeek__day-failure {
  border-color: var(--red);
  color: var(--red);
}
.lastWeek__day-disabled {
  border-color: var(--grey);
}
</style>
