<template>
  <section class="error404">
    <h1 class="title error404__title">Ошибка 404: страница не найдена</h1>
    <router-link to="/" class="text-small error404__link"
      >Перейти на главную
    </router-link>
  </section>
</template>
<style>
.error404 {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error404__title {
  text-align: center;
  width: 200px;
}
.error404__link {
  margin-top: 20px;
  text-align: center;
  text-decoration: underline;
}
</style>
