<script>
import { getHabitList, addHabit } from "../api.js";

import HabitItem from "../components/HabitItem.vue";
import AddingModal from "../components/AddingModal.vue";

export default {
  components: {
    HabitItem,
    AddingModal,
  },
  data() {
    return {
      habits: null,
      isAddingModalOpened: false,
    };
  },
  computed: {
    reversedHabits() {
      return [...this.habits].reverse();
    },
  },
  methods: {
    openAddingModal() {
      this.isAddingModalOpened = true;
    },
    closeAddingModal() {
      this.isAddingModalOpened = false;
    },
    addHabit(newHabitName) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      addHabit(newHabitName);
    },
  },
  created() {
    getHabitList().then((result) => (this.habits = result));
  },
};
</script>

<template>
  <section ref="page">
    <p v-if="!habits" class="message text-small">
      Привычки грузятся, подождите секунду...
    </p>
    <p v-else-if="habits.length === 0" class="message text-small">
      Привычки не найдены
    </p>
    <ul v-else-if="habits.length > 0" class="habitList">
      <li v-for="habit in reversedHabits" :key="habit.id">
        <habit-item :habit="habit"></habit-item>
      </li>
    </ul>
    <button @click="openAddingModal" class="addButton text-medium">
      Добавить привычку
    </button>
  </section>
  <adding-modal
    v-if="isAddingModalOpened"
    @close="closeAddingModal"
    @add-habit="addHabit"
  ></adding-modal>
</template>

<style scoped>
.habitList {
  width: 100%;
  padding-bottom: calc(60px + 20px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.addButton {
  width: 100%;
  height: 60px;

  position: fixed;
  bottom: 0;
  left: 0;

  border: 0;
  background-color: var(--white);
  color: var(--black);
  box-shadow: var(--blockTopBoxShadow);
}
.addButton:hover {
  background-color: var(--hoverButtonColor);
  cursor: pointer;
}
.addButton:active {
  background-color: var(--activeButtonColor);
}
</style>
