<template>
  <section class="settings">
    <h2 class="settings__title message title">
      Настроек ещё нет, но нужно было сбалансировать &lt;header&gt;
    </h2>
    <router-link to="/" class="settings__link text-small"
      >На главную
    </router-link>
  </section>
</template>

<style>
.settings {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.settings__title {
  width: var(--blockWidth);
  margin-bottom: 10px;
}
.settings__link {
  text-decoration: underline;
}
</style>
