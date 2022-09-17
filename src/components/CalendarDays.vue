<script>
export default {
  props: {
    days: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getDayClass(dayState) {
      let result;
      if (dayState === true) result = "day-success";
      else if (dayState === false) result = "day-failure";
      else if (dayState === null) result = "day-current";

      return result;
    },
  },
};
</script>

<template>
  <ul class="calendar__days">
    <li
      v-for="(day, index) in days"
      :key="index"
      :class="getDayClass(day.state)"
      class="calendar__day"
    >
      <span class="text-small">{{ day.number }}</span>
    </li>
  </ul>
</template>

<style scoped>
.calendar__days {
  padding: 0 19px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.calendar__day {
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid var(--grey);

  color: var(--grey);
}
.day-success {
  border-color: var(--green);
  color: var(--green);
}
.day-failure {
  border-color: var(--red);
  color: var(--red);
}
.day-current {
  border-color: var(--black);
  color: var(--black);
}
</style>
