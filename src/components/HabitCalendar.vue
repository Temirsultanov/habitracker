<script>
import CalendarInfo from "./CalendarInfo.vue";
import CalendarDays from "./CalendarDays.vue";

const COUNT_OF_DAYS = 42;

export default {
  components: {
    CalendarInfo,
    CalendarDays,
  },
  props: {
    days: {
      type: Array,
      required: true,
    },
  },
  data() {
    const lastDay = this.days[this.days.length - 1].date;
    return {
      currentMonthDate: new Date(lastDay.getFullYear(), lastDay.getMonth(), 1),
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
    daysList() {
      const list = [];
      const dayOfWeek = (6 + this.currentMonthDate.getDay()) % 7;
      list[dayOfWeek] = {
        number: 1,
      };

      const year = this.currentMonthDate.getFullYear();
      const month = this.currentMonthDate.getMonth();
      const copyDate = new Date(year, month, 1);

      for (let i = dayOfWeek + 1; i < COUNT_OF_DAYS; i++) {
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
      const newMonth = this.currentMonthDate.getMonth() - 1;
      this.currentMonthDate.setMonth(newMonth);

      // костыль, реактивность не срабатывает при setDate
      this.currentMonthDate = new Date(this.currentMonthDate);
    },
    moveToNextMonth() {
      const newMonth = this.currentMonthDate.getMonth() + 1;
      this.currentMonthDate.setMonth(newMonth);

      // костыль, реактивность не срабатывает при setDate
      this.currentMonthDate = new Date(this.currentMonthDate);
    },
    fillList(list) {
      const monthFirstDay = (6 + this.currentMonthDate.getDay()) % 7;
      let currentPrintDay;

      if (this.isLastMonth) {
        const lastDayDate = this.lastDay.date.getDate();
        currentPrintDay = this.days.length - 1;

        for (let i = monthFirstDay + lastDayDate - 1; i >= 0; i--) {
          if (this.days[currentPrintDay]) {
            list[i].state = this.days[currentPrintDay].state;
            currentPrintDay = currentPrintDay - 1;
          }
        }
      } else if (this.isFirstMonth) {
        const firstDayDate = this.beginDay.date.getDate();
        currentPrintDay = 0;

        for (let i = monthFirstDay + firstDayDate - 1; i < COUNT_OF_DAYS; i++) {
          list[i].state = this.days[currentPrintDay].state;
          currentPrintDay = currentPrintDay + 1;
        }
      } else {
        currentPrintDay = this.days.findIndex((day) => {
          const isMonthEqual =
            day.date.getMonth() === this.currentMonthDate.getMonth();
          const isYearsEqual =
            day.date.getFullYear() === this.currentMonthDate.getFullYear();
          return isMonthEqual && isYearsEqual && day.date.getDate() === 1;
        });

        let nextIndex = currentPrintDay;
        for (let i = monthFirstDay; i < COUNT_OF_DAYS; i++) {
          list[i].state = this.days[nextIndex].state;
          nextIndex = nextIndex + 1;
        }

        let prevIndex = currentPrintDay;
        for (let i = monthFirstDay - 1; i >= 0; i--) {
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
    <calendar-info
      @move-to-prev-month="moveToPrevMonth"
      @move-to-next-month="moveToNextMonth"
      :currentMonthDate="currentMonthDate"
      :isFirstMonth="isFirstMonth"
      :isLastMonth="isLastMonth"
    ></calendar-info>
    <hr class="calendar__line" />
    <ul class="calendar__weekNames">
      <li class="calendar__weekName text-small">пн</li>
      <li class="calendar__weekName text-small">вт</li>
      <li class="calendar__weekName text-small">ср</li>
      <li class="calendar__weekName text-small">чт</li>
      <li class="calendar__weekName text-small">пт</li>
      <li class="calendar__weekName text-small">сб</li>
      <li class="calendar__weekName text-small">вс</li>
    </ul>
    <calendar-days :days="daysList"></calendar-days>
  </div>
</template>

<style scoped>
.calendar {
  width: var(--blockWidth);
  border-radius: var(--borderRadius);
  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);
  padding-bottom: var(--blockPadding);
}
.calendar__line {
  height: 2px;
  margin: 0px 0px 20px 0;
  border: 0;
  background-color: var(--grey);
}
.calendar__weekNames {
  margin-bottom: 12px;
  padding: 0px 19px;

  display: flex;
  gap: 12px;
}
.calendar__weekName {
  width: 32px;
  text-align: center;
}
</style>
