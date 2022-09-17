<script>
import { RouterView } from "vue-router";

import AppHeader from "./components/AppHeader.vue";
import AppMenu from "./components/AppMenu.vue";

export default {
  components: {
    AppHeader,
    RouterView,
    AppMenu,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true;
    },
  },
};
</script>

<template>
  <app-header @open-menu="openMenu" class="header"></app-header>
  <app-menu v-show="isMenuOpen"></app-menu>
  <main class="content">
    <router-view></router-view>
  </main>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
}
.content {
  margin-top: 60px;
  padding-top: 40px;
}
</style>
