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
    openMenu: null,
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
  <header class="header">
    <button @click="openMenu" class="header__button menu-button">
      <burger-icon></burger-icon>
    </button>
    <router-link to="/" class="header__logo">
      <logo-icon></logo-icon
    ></router-link>
    <button @click="openSettings" class="header__button settings-button">
      <gear-icon></gear-icon>
    </button>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);
}
.header__button {
  height: 100%;
  padding: 0 var(--blockPadding);
  border: 0;
  background-color: var(--white);
}
.header__button:hover {
  background-color: var(--hoverButtonColor);
  cursor: pointer;
}
.header__button:active {
  background-color: var(--activeButtonColor);
}
.header__logo {
  padding: 10px;
}
</style>
