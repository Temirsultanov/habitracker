<script>
import LogoIcon from "../components/icons/LogoIcon.vue";
import AppInput from "../components/AppInput.vue";

import { signIn } from "../api.js";

export default {
  components: {
    LogoIcon,
    AppInput,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onFormSubmit(email, password) {
      signIn(email, password);
    },
  },
};
</script>
<template>
  <section class="signIn__section">
    <div class="formBlock">
      <logo-icon class="signIn__logo"></logo-icon>
      <form @submit.prevent="onFormSubmit(email, password)">
        <app-input
          :modelValue="email"
          @update:modelValue="(newValue) => (email = newValue)"
          placeholder="Электронная почта"
          required
          type="email"
        ></app-input>
        <app-input
          :modelValue="password"
          @update:modelValue="(newValue) => (password = newValue)"
          placeholder="Пароль"
          minlength="6"
          required
        ></app-input>
        <button class="signIn__button text-small">Войти</button>
      </form>
    </div>
    <div class="signUp">
      <h3 class="text-small">
        Нет аккаунта?
        <router-link to="/signup" class="signUp__link"
          >Зарегистрироваться</router-link
        >
      </h3>
    </div>
  </section>
</template>
<style>
.signIn__section {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  position: fixed;
  bottom: 100px;
}
.formBlock {
  width: var(--blockWidth);
  border-radius: var(--borderRadius);
  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);
  padding: var(--blockPadding);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.signIn__logo {
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 25px;
}
.signIn__button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background-color: var(--black);
  border-radius: var(--borderRadius);
  color: var(--white);
}
.signIn__button:hover {
  background-color: var(--green);
  cursor: pointer;
}
.signIn__button:focus {
  background-color: var(--green);
  border: 2px solid var(--black);
}
.signUp {
  margin-top: 10px;
  width: var(--blockWidth);
  border-radius: var(--borderRadius);
  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);
  padding: var(--blockPadding);
  display: flex;
  justify-content: center;
}
.signUp__link {
  text-decoration: underline;
}
</style>
