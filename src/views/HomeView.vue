<script>
import { addNewHabit, getHabitList, checkSession } from "../api.js";

import AppHeader from "../components/AppHeader.vue";
import HabitItem from "../components/HabitItem.vue";
import AddingModal from "../components/AddingModal.vue";

export default {
  components: {
    AppHeader,
    HabitItem,
    AddingModal,
  },
  data() {
    return {
      habits: null,
      isAddingModalOpened: false,
      isLogin: false,
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
    addHabit(newHabitTitle) {
      this.habits = null;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      addNewHabit(newHabitTitle).then((habits) => {
        this.habits = habits;
      });
    },
  },
  created() {
    checkSession()
      .then((isLogin) => {
        if (!isLogin) this.$router.push("/signup");
        else {
          this.isLogin = isLogin;
          return getHabitList();
        }
      })
      .then((habits) => {
        this.habits = habits;
      });

    document.body.style.overflow = "auto";
  },
};
</script>

<template>
  <app-header v-if="isLogin"></app-header>
  <section v-if="isLogin" class="home">
    <p v-if="!habits" class="message text-small">
      Привычки грузятся, подождите секунду...
    </p>
    <p v-else-if="habits.length === 0" class="message text-small">
      Привычки не найдены
    </p>
    <ul v-else-if="habits.length > 0" class="home__habitList">
      <li v-for="habit in reversedHabits" :key="habit.id">
        <habit-item :habit="habit"></habit-item>
      </li>
    </ul>
    <button @click="openAddingModal" class="home__addButton text-medium">
      Добавить привычку
    </button>
  </section>
  <adding-modal
    v-if="isAddingModalOpened"
    @close="closeAddingModal"
    @add-habit="addHabit"
  ></adding-modal>
</template>

<style>
.home__habitList {
  width: 100%;
  padding-bottom: calc(60px + 20px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.home__addButton {
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
.home__addButton:hover {
  background-color: var(--hoverButtonColor);
  cursor: pointer;
}
.home__addButton:active {
  background-color: var(--activeButtonColor);
}
</style>
