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
      habits: null,
    };
  },
  methods: {
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  watch: {
    isMenuOpen() {
      if (this.isMenuOpen) {
        document.body.style.overflow = "hidden";
        return;
      }

      document.body.style.overflow = "auto";
    },
  },
  created() {
    this.$watch(
      () => this.$route,
      () => {
        this.isMenuOpen = false;
      }
    );
  },
};
</script>

<template>
  <app-header @open-menu="openMenu" class="app__header"></app-header>
  <app-menu v-show="isMenuOpen" @close-menu="closeMenu"></app-menu>
  <main class="app__content">
    <router-view></router-view>
  </main>
</template>

<style>
.app__header {
  position: fixed;
  top: 0;
  left: 0;
}
.app__content {
  margin-top: 60px;
  padding-top: 40px;
}
</style>
