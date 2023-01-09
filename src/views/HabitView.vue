<script>
import {
  getHabitById,
  changeHabitTitleById,
  deleteHabitById,
  checkSession,
} from "../api.js";

import AppHeader from "../components/AppHeader.vue";
import HabitInfo from "../components/HabitInfo.vue";
import ChangingModal from "../components/ChangingModal.vue";
import DeletingModal from "../components/DeletingModal.vue";
import HabitCalendar from "../components/HabitCalendar.vue";

export default {
  components: {
    AppHeader,
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
    changeHabitTitle(newHabitTitle) {
      changeHabitTitleById(this.habit.id, newHabitTitle);
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
    checkSession()
      .then((isAllowed) => {
        if (!isAllowed) this.$router.push("/signup");
        else {
          const id = this.$route.params.id;
          const numberedId = +id;
          return getHabitById(numberedId);
        }
      })
      .then((result) => (this.habit = result));
  },
};
</script>

<template>
  <app-header></app-header>
  <section v-if="habit" class="habit">
    <habit-info
      @open-changing-modal="openChangingModal"
      :habit="habit"
    ></habit-info>
    <habit-calendar :days="habit.days"></habit-calendar>
    <div class="habit__deleteButtonWrapper">
      <button @click="openDeletingModal" class="habit__deleteButton text-small">
        Удалить привычку
      </button>
    </div>
  </section>
  <h3 v-else-if="habit === null" class="message text-small">
    Привычка грузится, подождите секунду...
  </h3>
  <div v-else-if="habit === undefined" class="message">
    <h3 class="title">Привычка не найдена :(</h3>
    <router-link to="/" class="habit__linkToHome text-small">
      Перейти на главную
    </router-link>
  </div>
  <changing-modal
    v-if="isChangingModalOpened"
    @close="closeChangingModal"
    @change-title="changeHabitTitle"
    :habitTitle="habit.title"
  ></changing-modal>
  <deleting-modal
    v-if="isDeletingModalOpened"
    @close="closeDeletingModal"
    @delete-habit="deleteHabit"
    :habitTitle="habit.title"
  ></deleting-modal>
</template>

<style>
.habit {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
}
.habit__linkToHome {
  display: inline-block;
  margin-top: 10px;
  text-decoration: underline;
}
.habit__deleteButtonWrapper {
  width: var(--blockWidth);
  margin-top: 20px;
}
.habit__deleteButton {
  margin-left: var(--blockPadding);
  padding: 0;

  border: 0;
  background-color: transparent;
  color: var(--red);
}
.habit__deleteButton:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
