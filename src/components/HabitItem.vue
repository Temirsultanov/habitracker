<script>
import RightArrowIcon from "./icons/RightArrowIcon.vue";
import LastWeek from "./LastWeek.vue";
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
      if (this.habit.days.length >= 7) {
        return this.habit.days.slice(-7).reverse();
      }

      const days = [...this.habit.days].reverse();
      const lastDay = days[days.length - 1].date;
      const year = lastDay.getFullYear();
      const month = lastDay.getMonth();
      const date = lastDay.getDate();

      const daysLength = 7 - days.length;
      for (let i = 1; i <= daysLength; i++) {
        const newDay = {
          date: new Date(year, month, date - i),
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
  <li class="habit">
    <button class="habit__button" @click="openHabit">
      <h3 class="habit__name">{{ habit.name }}</h3>
      <right-arrow-icon></right-arrow-icon>
    </button>
    <hr class="habit__line" />
    <last-week :lastWeek="lastWeek"></last-week>
  </li>
</template>

<style scoped>
.habit {
  width: 335px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(214, 214, 214, 0.25);
}
.habit__button {
  width: 100%;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 0;
  border-radius: 10px 10px 0px 0px;
  background-color: transparent;
}
.habit__button:hover {
  background-color: #e5e5e5;
  cursor: pointer;
}
.habit__button:active {
  background-color: #a1a1a1;
}
.habit__name {
  font-size: 20px;
  text-align: left;
  line-height: 1.3;
}
.habit__line {
  width: 100%;
  height: 2px;
  margin: 0;
  background-color: #e5e5e5;
  border: 0;
}
</style>
