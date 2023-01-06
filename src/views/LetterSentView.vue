<template>
  <section class="letterSent">
    <h1 class="title">Проверьте вашу почту</h1>
    <h3 class="text-small letterSent__description">
      Мы отправили вам на почту ссылку, перейдите по ней, чтобы подтвердить
      ваш&nbsp;email-адрес.
    </h3>
  </section>
</template>

<style>
.letterSent {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.letterSent__description {
  margin-top: 20px;
  width: var(--blockWidth);
  text-align: center;
}
</style>
