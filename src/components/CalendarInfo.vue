<script>
import LeftArrowIcon from "./icons/LeftArrowIcon.vue";
import RightArrowIcon from "./icons/RightArrowIcon.vue";

const FORMATTER = new Intl.DateTimeFormat("ru", { month: "long" });

export default {
  components: {
    LeftArrowIcon,
    RightArrowIcon,
  },
  props: {
    currentMonthDate: {
      type: Date,
      required: true,
    },
    isFirstMonth: {
      type: Boolean,
      required: true,
    },
    isLastMonth: {
      type: Boolean,
      required: true,
    },
  },
  emits: {
    "move-to-prev-month": null,
    "move-to-next-month": null,
  },
  computed: {
    formattedDate() {
      const year = this.currentMonthDate.getFullYear();
      const month = FORMATTER.format(this.currentMonthDate);
      const startCasedMonth = month[0].toUpperCase() + month.slice(1);

      return `${startCasedMonth}, ${year}`;
    },
  },
  methods: {
    moveToPrevMonth() {
      this.$emit("move-to-prev-month");
    },
    moveToNextMonth() {
      this.$emit("move-to-next-month");
    },
  },
};
</script>

<template>
  <div class="info">
    <h3 class="text-medium">{{ formattedDate }}</h3>
    <div class="info__controls">
      <button
        @click="moveToPrevMonth"
        :disabled="isFirstMonth"
        class="info__button prevMonth"
      >
        <left-arrow-icon></left-arrow-icon>
      </button>
      <button
        @click="moveToNextMonth"
        :disabled="isLastMonth"
        class="info__button nextMonth"
      >
        <right-arrow-icon></right-arrow-icon>
      </button>
    </div>
  </div>
</template>

<style scoped>
.info {
  padding: 15px 15px 15px var(--blockPadding);

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info__controls {
  display: flex;
  gap: 25px;
}
.info__button {
  padding: 10px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
}
.info__button:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.info__button:active {
  transform: scale(1);
}
.info__button:disabled {
  transform: scale(1);
  opacity: 0.4;
  cursor: default;
}
</style>
