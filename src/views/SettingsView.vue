<script>
import AppHeader from "../components/AppHeader.vue";
import { logOut } from "../api.js";

export default {
  components: {
    AppHeader,
  },
  methods: {
    onLogoutButtonClick() {
      logOut();
    },
  },
};
</script>
<template>
  <app-header></app-header>
  <section class="settings">
    <button @click="onLogoutButtonClick" class="text-small logoutLink">
      Выйти из аккаунта
    </button>
  </section>
</template>

<style>
.settings {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.settings__title {
  width: var(--blockWidth);
  margin-bottom: 10px;
}
.logoutLink {
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
