<script>
import { getHabitById, changeHabitNameById, deleteHabitById } from "../api.js";

import HabitInfo from "../components/HabitInfo.vue";
import ChangingModal from "../components/ChangingModal.vue";
import DeletingModal from "../components/DeletingModal.vue";
import HabitCalendar from "../components/HabitCalendar.vue";

export default {
  components: {
    HabitInfo,
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
  methods: {
    openChangingModal() {
      this.isChangingModalOpened = true;
    },
    closeChangingModal() {
      this.isChangingModalOpened = false;
    },
    changeHabitName(newHabitName) {
      changeHabitNameById(this.habit.id, newHabitName);
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
    getHabitById(numberedId).then((result) => (this.habit = result));
  },
};
</script>

<template>
  <section v-if="habit" class="habit">
    <habit-info
      @open-changing-modal="openChangingModal"
      :habit="habit"
    ></habit-info>
    <habit-calendar :days="habit.days"></habit-calendar>
    <div class="deleteButtonWrapper">
      <button @click="openDeletingModal" class="deleteButton text-small">
        Удалить привычку
      </button>
    </div>
  </section>
  <changing-modal
    v-if="isChangingModalOpened"
    @close="closeChangingModal"
    @change-name="changeHabitName"
    :habitName="habit.name"
  ></changing-modal>
  <deleting-modal
    v-if="isDeletingModalOpened"
    @close="closeDeletingModal"
    @delete-habit="deleteHabit"
    :habitName="habit.name"
  ></deleting-modal>
</template>

<style scoped>
.habit {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.deleteButtonWrapper {
  width: var(--blockWidth);
  margin-top: 20px;
}
.deleteButton {
  margin-left: var(--blockPadding);
  padding: 0;

  border: 0;
  background-color: transparent;
  color: var(--red);
}
.deleteButton:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
