<script>
import RightArrowIcon from "./icons/RightArrowIcon.vue";
import LastWeek from "./LastWeek.vue";

const DAYS_IN_WEEK = 7;

export default {
  components: {
    RightArrowIcon,
    LastWeek,
  },
  props: {
    habit: {
      type: Object,
      required: true,
    },
  },
  computed: {
    lastWeek() {
      if (this.habit.days.length >= DAYS_IN_WEEK) {
        return this.habit.days.slice(-DAYS_IN_WEEK).reverse();
      }

      const days = [...this.habit.days].reverse();
      const lastDay = days[days.length - 1].date;
      const lastDayYear = lastDay.getFullYear();
      const lastDayMonth = lastDay.getMonth();
      const lastDayDate = lastDay.getDate();

      const countOfShortageDays = DAYS_IN_WEEK - days.length;
      for (let i = 1; i <= countOfShortageDays; i++) {
        const newDay = {
          date: new Date(lastDayYear, lastDayMonth, lastDayDate - i),
          state: null,
        };
        days.push(newDay);
      }
      return days;
    },
  },
  methods: {
    openHabit() {
      const path = `/habit/${this.habit.id}`;
      this.$router.push(path);
    },
  },
};
</script>

<template>
  <div class="habit">
    <button @click="openHabit" class="habit__button">
      <h3 class="habit__name title">{{ habit.name }}</h3>
      <right-arrow-icon></right-arrow-icon>
    </button>
    <hr class="habit__line" />
    <last-week :lastWeek="lastWeek"></last-week>
  </div>
</template>

<style scoped>
.habit {
  width: var(--blockWidth);
  border-radius: var(--borderRadius);
  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);
}
.habit__button {
  width: 100%;
  padding: var(--blockPadding);

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 0;
  border-radius: var(--borderRadius) var(--borderRadius) 0px 0px;
  background-color: transparent;
}
.habit__button:hover {
  background-color: var(--hoverButtonColor);
  cursor: pointer;
}
.habit__button:active {
  background-color: var(--activeButtonColor);
}
.habit__name {
  color: var(--black);
  text-align: left;
}
.habit__line {
  width: 100%;
  height: 2px;
  margin: 0;
  border: 0;
  background-color: var(--grey);
}
</style>
