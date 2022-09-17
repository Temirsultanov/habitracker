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
        <span v-show="day.state === true" class="text-small">
          {{ day.date.getDate() }}
        </span>
      </button>
      <span
        v-else
        :class="{
          'habit__day-success': day.state === true,
          'habit__day-failure': day.state === false,
        }"
        class="habit__day text-small"
      >
        {{ day.date.getDate() }}
      </span>
    </li>
  </ul>
</template>

<style>
.habit__week {
  width: 100%;
  padding: var(--blockPadding);

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

  background-color: var(--white);
  color: var(--grey);

  border: 2px solid var(--grey);
  border-radius: 50%;
}
.habit__today {
  border: 2px solid var(--black);
  padding: 0px;
}
.habit__today:hover {
  border-color: var(--green);
  cursor: pointer;
}
.habit__day-success {
  border-color: var(--green);
  color: var(--green);
}
.habit__day-failure {
  border-color: var(--red);
  color: var(--red);
}
.habit__day-disabled {
  border-color: var(--grey);
}
</style>
