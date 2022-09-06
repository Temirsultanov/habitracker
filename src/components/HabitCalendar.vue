<script>
import RightArrowIcon from "./icons/RightArrowIcon.vue";
import LeftArrowIcon from "./icons/LeftArrowIcon.vue";
export default {
  components: {
    LeftArrowIcon,
    RightArrowIcon,
  },
  props: {
    days: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentMonthDate: new Date(
        this.days[this.days.length - 1].date.getFullYear(),
        this.days[this.days.length - 1].date.getMonth()
      ),
      currentPrintDay: this.days.length - 1,
    };
  },
  computed: {
    beginDay() {
      return this.days[0];
    },
    lastDay() {
      return this.days[this.days.length - 1];
    },
    isFirstMonth() {
      const currentMonth = this.currentMonthDate.getMonth();
      const currentYear = this.currentMonthDate.getFullYear();
      const isMonthEqual = currentMonth === this.beginDay.date.getMonth();
      const isYearsEqual = currentYear === this.beginDay.date.getFullYear();

      return isMonthEqual && isYearsEqual;
    },
    isLastMonth() {
      const currentMonth = this.currentMonthDate.getMonth();
      const currentYear = this.currentMonthDate.getFullYear();
      const isMonthEqual = currentMonth === this.lastDay.date.getMonth();
      const isYearsEqual = currentYear === this.lastDay.date.getFullYear();

      return isMonthEqual && isYearsEqual;
    },
    monthString() {
      const formatter = new Intl.DateTimeFormat("ru", { month: "long" });
      let month = formatter.format(this.currentMonthDate);
      month = month[0].toUpperCase() + month.slice(1);
      return `${month}, ${this.currentMonthDate.getFullYear()}`;
    },
    daysList() {
      const list = [];
      const dayOfWeek = (6 + this.currentMonthDate.getDay()) % 7;
      list[dayOfWeek] = {
        number: 1,
      };

      const year = this.currentMonthDate.getFullYear();
      const month = this.currentMonthDate.getMonth();
      const copyDate = new Date(year, month, 1);

      for (let i = dayOfWeek + 1; i < 35; i++) {
        copyDate.setDate(copyDate.getDate() + 1);
        list[i] = {
          number: copyDate.getDate(),
        };
      }

      copyDate.setDate(1);
      copyDate.setMonth(copyDate.getMonth() - 1);

      for (let i = dayOfWeek - 1; i > -1; i--) {
        copyDate.setDate(copyDate.getDate() - 1);
        list[i] = {
          number: copyDate.getDate(),
        };
      }

      return this.fillList(list);
    },
  },
  methods: {
    moveToPrevMonth() {
      const year = this.currentMonthDate.getFullYear();
      const month = this.currentMonthDate.getMonth() - 1;
      this.currentMonthDate = new Date(year, month, 1);

      if (this.isLastMonth) {
        this.currentPrintDay = this.days.length - 1;
      } else if (this.isFirstMonth) {
        this.currentPrintDay = 0;
      }
    },
    moveToNextMonth() {
      const year = this.currentMonthDate.getFullYear();
      const month = this.currentMonthDate.getMonth() + 1;
      this.currentMonthDate = new Date(year, month, 1);

      if (this.isLastMonth) {
        this.currentPrintDay = this.days.length - 1;
      } else if (this.isFirstMonth) {
        this.currentPrintDay = 0;
      }
    },
    fillList(list) {
      const firstMonthDay = (6 + this.currentMonthDate.getDay()) % 7;
      if (this.isLastMonth) {
        const lastDayDate = this.lastDay.date.getDate();
        for (let i = firstMonthDay + lastDayDate - 1; i >= 0; i--) {
          if (this.days[this.currentPrintDay]) {
            list[i].state = this.days[this.currentPrintDay].state;
            this.currentPrintDay = this.currentPrintDay - 1;
          }
        }
      } else if (this.isFirstMonth) {
        const firstDayDate = this.beginDay.date.getDate();
        for (let i = firstMonthDay + firstDayDate - 1; i < 35; i++) {
          list[i].state = this.days[this.currentPrintDay].state;
          this.currentPrintDay = this.currentPrintDay + 1;
        }
      } else {
        this.currentPrintDay = this.days.findIndex((day) => {
          const isMonthEqual =
            day.date.getMonth() === this.currentMonthDate.getMonth();
          const isYearsEqual =
            day.date.getFullYear() === this.currentMonthDate.getFullYear();
          return isMonthEqual && isYearsEqual && day.date.getDate() === 1;
        });

        let nextIndex = this.currentPrintDay;
        console.log(nextIndex);
        console.log(this.days[nextIndex]);
        console.log(this.days);
        for (let i = firstMonthDay; i < 35; i++) {
          list[i].state = this.days[nextIndex].state;
          nextIndex = nextIndex + 1;
        }

        let prevIndex = this.currentPrintDay;
        for (let i = firstMonthDay - 1; i >= 0; i--) {
          list[i].state = this.days[prevIndex].state;
          prevIndex = prevIndex - 1;
        }
      }
      return list;
    },
  },
};
</script>
<template>
  <div class="calendar">
    <div class="calendar__month">
      <h3 class="calendar__title">{{ monthString }}</h3>
      <div class="calendar__controls">
        <button
          @click="moveToPrevMonth"
          :disabled="isFirstMonth"
          class="calendar__button prevMonth"
        >
          <left-arrow-icon></left-arrow-icon>
        </button>
        <button
          @click="moveToNextMonth"
          :disabled="isLastMonth"
          class="calendar__button nextMonth"
        >
          <right-arrow-icon></right-arrow-icon>
        </button>
      </div>
    </div>
    <hr class="calendar__line" />
    <ul class="week-names">
      <li class="week-name">пн</li>
      <li class="week-name">вт</li>
      <li class="week-name">ср</li>
      <li class="week-name">чт</li>
      <li class="week-name">пт</li>
      <li class="week-name">сб</li>
      <li class="week-name">вс</li>
    </ul>
    <ul class="calendar__days">
      <li
        class="calendar__day"
        :class="{
          'day-success': day.state === true,
          'day-failure': day.state === false,
          'day-current': day.state === null,
        }"
        v-for="(day, index) in daysList"
        :key="index"
      >
        {{ day.number }}
      </li>
    </ul>
  </div>
</template>
<style scoped>
.calendar {
  width: 335px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(214, 214, 214, 0.25);
  padding-bottom: 20px;
}
.calendar__month {
  padding: 15px 15px 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.calendar__title {
  font-size: 20px;
  font-weight: 400;
  margin: 0;
}
.calendar__controls {
  display: flex;
  gap: 25px;
}
.calendar__button {
  padding: 10px;
  background-color: transparent;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}
.calendar__button:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.calendar__button:active {
  transform: scale(1);
}
.calendar__button:disabled {
  transform: scale(1);
  opacity: 0.5;
  cursor: default;
}
.calendar__line {
  height: 2px;
  margin: 0;
  margin-bottom: 20px;
  background-color: #e5e5e5;
  border: 0;
}
.week-names {
  display: flex;
  padding: 0px 19px;
  gap: 12px;
  margin-bottom: 12px;
}
.week-name {
  width: 32px;
  text-align: center;
}
.calendar__days {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0 19px;
}
.calendar__day {
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: 2px solid #d1d1d1;

  color: #d1d1d1;
}
.day-success {
  border-color: #1ac049;
  color: #1ac049;
}
.day-failure {
  border-color: #d64f67;
  color: #d64f67;
}
.day-current {
  border-color: #3a3a3a;
  color: #3a3a3a;
}
</style>
