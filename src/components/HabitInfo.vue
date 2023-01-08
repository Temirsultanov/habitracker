<script>
import PencilIcon from "./icons/PencilIcon.vue";

export default {
  components: {
    PencilIcon,
  },
  emits: {
    "open-changing-modal": null,
  },
  props: {
    habit: {
      type: Object,
      required: true,
    },
  },
  computed: {
    countSuccessedDays() {
      const reversedDays = [...this.habit.days].reverse();
      const failureIndex = reversedDays.findIndex(
        (day) => day.is_done === false
      );
      let count = 0;

      if (failureIndex === -1) return count + reversedDays.length;
      return count + failureIndex;
    },
    formattedBeginDay() {
      return new Intl.DateTimeFormat("ru", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }).format(this.habit.begin_day);
    },
  },
  methods: {
    openChangingModal() {
      this.$emit("open-changing-modal");
    },
  },
};
</script>

<template>
  <div class="habitInfo">
    <div class="habitInfo__top">
      <h3 class="title">{{ habit.title }}</h3>
      <button @click="openChangingModal" class="habitInfo__changeButton">
        <pencil-icon></pencil-icon>
      </button>
    </div>
    <div class="habitInfo__bottom">
      <span class="text-small">Дней подряд: {{ countSuccessedDays }}</span>
      <span class="text-small"> Начало: {{ formattedBeginDay }} </span>
    </div>
  </div>
</template>

<style>
.habitInfo {
  width: var(--blockWidth);
  margin-bottom: 20px;
  border-radius: var(--borderRadius);
  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);
}
.habitInfo__top {
  width: 100%;
  margin-bottom: 5px;
  padding: 10px 10px 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.habitInfo__changeButton {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
}
.habitInfo__changeButton:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.habitInfo__bottom {
  display: flex;
  justify-content: space-between;
  padding: 0 var(--blockPadding) var(--blockPadding);
}
</style>
