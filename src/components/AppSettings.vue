<script>
import CrossIcon from "./icons/CrossIcon.vue";
import { logOut } from "../api.js";

export default {
  components: {
    CrossIcon,
  },
  emits: {
    "close-settings": null,
  },
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeSettings() {
      this.$emit("close-settings");
    },
    onLogoutButtonClick() {
      logOut();
      this.$router.push("/signin");
    },
  },
};
</script>
<template>
  <section class="settings">
    <button @click="closeSettings" class="settings__closeButton">
      <cross-icon></cross-icon>
    </button>
    <h2 class="settings__email title">{{ email }}</h2>
    <button
      @click="onLogoutButtonClick"
      class="settings__logoutButton text-small"
    >
      Выйти из аккаунта
    </button>
  </section>
</template>

<style>
.settings {
  width: 100%;
  height: 100%;
  padding-top: 13px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  background-color: var(--white);
}
.settings__closeButton {
  margin-left: 13px;
  margin-bottom: 33px;
  padding: 17px;
  align-self: start;

  border: 0;
  background-color: transparent;
}
.settings__closeButton:hover {
  cursor: pointer;
}
.settings__closeButton:hover path {
  fill: var(--red);
}
.settings__closeButton:active path {
  fill: var(--hoverRedButton);
}
.settings__email {
  margin-left: 30px;
  margin-bottom: 10px;
  max-width: calc(100% - 60px);
  overflow: auto;
}
.settings__logoutButton {
  padding: 0;
  margin-left: 30px;
  border: 0;
  background-color: transparent;
  color: var(--red);
}
.settings__logoutButton:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
