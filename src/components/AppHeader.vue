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
    <button class="header__button setting-button" @click="openSettings">
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

  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(214, 214, 214, 0.25);
}
.header__button {
  height: 100%;
  border: 0;
  background-color: #fff;
  padding: 0 20px;
}
.header__button:hover {
  background-color: #e5e5e5;
  cursor: pointer;
}
.header__button:active {
  background-color: #a1a1a1;
}
.header__logo {
  padding: 10px;
}
</style>
