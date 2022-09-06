<script>
import { getHabitList } from "../api.js";
import HabitItem from "../components/HabitItem.vue";
import AddingModal from "../components/AddingModal.vue";
export default {
  components: {
    HabitItem,
    AddingModal,
  },
  data() {
    return {
      habits: [],
      isAddingModalOpened: false,
    };
  },
  created() {
    getHabitList().then((result) => (this.habits = result));
  },
  methods: {
    openAddingModal() {
      this.isAddingModalOpened = true;
    },
    closeAddingModal() {
      this.isAddingModalOpened = false;
    },
  },
};
</script>
<template>
  <ul v-if="habits" class="habitList">
    <habit-item
      v-for="habit in habits"
      :key="habit.id"
      :habit="habit"
    ></habit-item>
  </ul>
  <p v-else>Привычки грузятся, подождите секундочку...</p>
  <button class="addButton" @click="openAddingModal">Добавить привычку</button>
  <adding-modal
    v-if="isAddingModalOpened"
    @close="closeAddingModal"
  ></adding-modal>
</template>
<style scoped>
.habitList {
  width: 100%;
  padding-bottom: 80px;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 20px;
}
.addButton {
  width: 100%;
  height: 60px;

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: #fff;
  box-shadow: 0px -4px 4px rgba(214, 214, 214, 0.25);
  border: 0;
  font-size: 20px;
}
.addButton:hover {
  background-color: #e5e5e5;
  cursor: pointer;
}
.addButton:active {
  background-color: #a1a1a1;
}
</style>
