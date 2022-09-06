<template>
  <section class="settings">
    <h2 class="settings__title">
      Никаких настроек нет, <br />просто нужно было сбалансировать
      &lt;header&gt;
    </h2>
    <router-link to="/" class="setting__link">На главную</router-link>
  </section>
</template>
<style>
.settings {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.settings__title {
  font-size: calc(16px + 14 * (100vw - 375px) / 1025);
  line-height: 1.4;
  text-align: center;
  border-radius: 10px;
}
.setting__link {
  margin-top: 20px;
  font-size: 16px;
  text-decoration: underline;
}
</style>
