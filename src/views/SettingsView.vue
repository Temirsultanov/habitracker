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
    <router-link to="/" class="text-small settings__link">
      Вернуться на главную
    </router-link>

    <span class="text-small" style="display: block">—</span>
    <button @click="onLogoutButtonClick" class="text-small settings__link">
      Выйти из аккаунта
    </button>
  </section>
</template>

<style>
.settings {
  display: flex;
  align-items: center;
  flex-direction: column; 
}
.settings__link {
  text-decoration: underline;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
