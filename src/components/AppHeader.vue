<script>
import LogoIcon from "./icons/LogoIcon.vue";
import BurgerIcon from "./icons/BurgerIcon.vue";
import GearIcon from "./icons/GearIcon.vue";
export default {
  components: {
    LogoIcon,
    BurgerIcon,
    GearIcon,
  },
  emits: {
    "open-menu": null,
  },
  methods: {
    openSettings() {
      this.$router.push("/settings");
    },
    openMenu() {
      this.$emit("open-menu");
    },
  },
};
</script>

<template>
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
