<script>
import { getHabitById, deleteHabitById } from "../api.js";
import PencilIcon from "../components/icons/PencilIcon.vue";
import ChangingModal from "../components/ChangingModal.vue";
import DeletingModal from "../components/DeletingModal.vue";
import HabitCalendar from "../components/HabitCalendar.vue";
export default {
  components: {
    PencilIcon,
    ChangingModal,
    DeletingModal,
    HabitCalendar,
  },
  data() {
    return {
      habit: null,
      isChangingModalOpened: false,
      isDeletingModalOpened: false,
    };
  },
  computed: {
    countSuccessedDays() {
      const days = [...this.habit.days].reverse();
      const index = days.findIndex((day) => day.state === false);
      let count = 0;

      const todayState = days[0].state;
      if (todayState === true) count = count + 1;
      if (index === -1) return count + days.length - 1;

      return count + index - 1;
    },
    beginDay() {
      return new Intl.DateTimeFormat("ru", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }).format(this.habit.beginDay);
    },
  },
  methods: {
    openChangingModal() {
      this.isChangingModalOpened = true;
    },
    closeChangingModal() {
      this.isChangingModalOpened = false;
    },
    changeHabitName(newName) {
      this.habit.name = newName;
    },
    openDeletingModal() {
      this.isDeletingModalOpened = true;
    },
    closeDeletingModal() {
      this.isDeletingModalOpened = false;
    },
    deleteHabit() {
      deleteHabitById(this.habit.id);
      this.$router.push("/");
    },
  },
  created() {
    // Похоже на костыль
    const id = this.$router.currentRoute.value.params.id;
    const numberedId = +id;
    this.habit = getHabitById(numberedId);
  },
};
</script>

<template>
  <section class="habit" v-if="habit">
    <div class="habit__info info">
      <div class="info__top">
        <h3 class="info__title">{{ habit.name }}</h3>
        <button @click="openChangingModal" class="changeButton">
          <pencil-icon></pencil-icon>
        </button>
      </div>
      <div class="info__bottom">
        <span class="countSuccessedDays">
          Дней подряд: {{ countSuccessedDays }}
        </span>
        <span class="beginDay"> Начало: {{ beginDay }} </span>
      </div>
    </div>
    <habit-calendar :days="habit.days"></habit-calendar>
    <div class="deleteButton__wrapper">
      <button @click="openDeletingModal" class="deleteButton">
        Удалить привычку
      </button>
    </div>
  </section>
  <changing-modal
    :habitName="habit.name"
    v-if="isChangingModalOpened"
    @close="closeChangingModal"
    @change-name="changeHabitName"
  ></changing-modal>
  <deleting-modal
    :habitName="habit.name"
    v-if="isDeletingModalOpened"
    @close="closeDeletingModal"
    @delete-habit="deleteHabit"
  ></deleting-modal>
</template>

<style>
.habit {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.habit__info {
  width: 335px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(214, 214, 214, 0.25);
  margin-bottom: 20px;
}
.info__top {
  width: 100%;
  margin-bottom: 10px;
  padding: 15px 10px 0px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info__title {
  font-size: 20px;
  line-height: 1.4;
}
.changeButton {
  padding: 10px 10px 0 10px;
  border-radius: 50%;
  border: none;

  background-color: transparent;
  cursor: pointer;
}
.info__bottom {
  display: flex;
  justify-content: space-between;
  padding: 0 20px 20px;
}
.countSuccessedDays,
.beginDay {
  font-size: 16px;
}
.deleteButton__wrapper {
  margin-top: 20px;
  width: 335px;
}
.deleteButton {
  border: 0;
  background-color: transparent;
  color: #d64f67;
  font-size: 16px;
}
.deleteButton:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
