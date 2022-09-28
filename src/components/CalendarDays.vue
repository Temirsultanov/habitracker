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
      if (dayState === true) result = "calendarDays__item-success";
      else if (dayState === false) result = "calendarDays__item-failure";
      else if (dayState === null) result = "calendarDays__item-current";

      return result;
    },
  },
};
</script>

<template>
  <ul class="calendarDays">
    <li
      v-for="(day, index) in days"
      :key="index"
      :class="getDayClass(day.state)"
      class="calendarDays__item"
    >
      <span class="text-small">{{ day.number }}</span>
    </li>
  </ul>
</template>

<style>
.calendarDays {
  padding: 0 19px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.calendarDays__item {
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid var(--grey);

  color: var(--grey);
}
.calendarDays__item-success {
  border-color: var(--green);
  color: var(--green);
}
.calendarDays__item-failure {
  border-color: var(--red);
  color: var(--red);
}
.calendarDays__item-current {
  border-color: var(--black);
  color: var(--black);
}
</style>
