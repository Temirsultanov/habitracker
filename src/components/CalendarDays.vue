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
      if (dayState === true) return "calendarDays__item-success";
      else if (dayState === false) return "calendarDays__item-failure";
    },
  },
};
</script>

<template>
  <ul class="calendarDays">
    <li
      v-for="(day, index) in days"
      :key="index"
      :class="getDayClass(day.is_done)"
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
