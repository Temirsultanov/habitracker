<script>
import LogoIcon from "../components/icons/LogoIcon.vue";
import AppInput from "../components/AppInput.vue";
import { createNewUser } from "../api.js";

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
      createNewUser(email, password);
      this.$router.push("/lettersent");
    },
  },
};
</script>
<template>
  <section class="signUp__section">
    <div class="formBlock">
      <logo-icon class="signUp__logo"></logo-icon>
      <h2 class="title signUp__title">Регистрация</h2>
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
        <button class="signUp__button text-small">Зарегистрироваться</button>
      </form>
    </div>
    <div class="signIn">
      <h3 class="text-small">
        Есть аккаунт?
        <router-link to="/signin" class="signIn__link">Войти</router-link>
      </h3>
    </div>
  </section>
</template>
<style>
.signUp__section {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  position: fixed;
  bottom: 100px;
}
.signUp__title {
  margin-bottom: 30px;
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
.signUp__logo {
  box-sizing: border-box;
  margin-top: 10px;
  margin-bottom: 15px;
}
.signUp__button {
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background-color: var(--black);
  border-radius: var(--borderRadius);
  color: var(--white);
}
.signUp__button:hover {
  background-color: var(--green);
  cursor: pointer;
}
.signUp__button:focus {
  background-color: var(--green);
  border: 2px solid var(--black);
}
.signIn {
  margin-top: 10px;
  width: var(--blockWidth);
  border-radius: var(--borderRadius);
  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);
  padding: var(--blockPadding);
  display: flex;
  justify-content: center;
}
.signIn__link {
  text-decoration: underline;
}
</style>
