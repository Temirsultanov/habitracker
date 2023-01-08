<script>
import LogoIcon from "./icons/LogoIcon.vue";
import BurgerIcon from "./icons/BurgerIcon.vue";
import GearIcon from "./icons/GearIcon.vue";
import AppMenu from "./AppMenu.vue";
import AppSettings from "./AppSettings.vue";
import { getMyEmail } from "../api.js";

export default {
  components: {
    LogoIcon,
    BurgerIcon,
    GearIcon,
    AppMenu,
    AppSettings,
  },
  data() {
    return {
      isMenuOpen: false,
      isSettingsOpen: false,
      email: "",
    };
  },
  watch: {
    isMenuOpen() {
      if (this.isMenuOpen) {
        document.body.style.overflow = "hidden";
        return;
      }

      document.body.style.overflow = "auto";
    },
    isSettingsOpen() {
      if (this.isSettingsOpen) {
        document.body.style.overflow = "hidden";
        return;
      }

      document.body.style.overflow = "auto";
    },
  },
  methods: {
    openSettings() {
      this.isSettingsOpen = true;
    },
    closeSettings() {
      this.isSettingsOpen = false;
    },
    openMenu() {
      this.isMenuOpen = true;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
  created() {
    getMyEmail().then((email) => {
      this.email = email;
    });
  },
};
</script>

<template>
  <app-menu v-show="isMenuOpen" @close-menu="closeMenu"></app-menu>
  <app-settings
    v-show="isSettingsOpen"
    @close-settings="closeSettings"
    :email="email"
  ></app-settings>
  <header class="appHeader">
    <button @click="openMenu" class="appHeader__button" aria-label="Open Menu">
      <burger-icon></burger-icon>
    </button>
    <router-link to="/" class="appHeader__logo" aria-label="Open Habits List">
      <logo-icon></logo-icon
    ></router-link>
    <button
      @click="openSettings"
      class="appHeader__button"
      aria-label="Open Settings"
    >
      <gear-icon></gear-icon>
    </button>
  </header>
</template>

<style>
.appHeader {
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);

  position: fixed;
  top: 0;
  left: 0;
}
.appHeader__button {
  height: 100%;
  padding: 0 var(--blockPadding);
  border: 0;
  background-color: var(--white);
}
.appHeader__button:hover {
  background-color: var(--hoverButtonColor);
  cursor: pointer;
}
.appHeader__button:active {
  background-color: var(--activeButtonColor);
}
.appHeader__logo {
  padding: 10px;
}
</style>
