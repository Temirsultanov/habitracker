<template>
  <section class="menu">
    <nav>
      <ul class="links">
        <li><a class="menu__link" href="http://yandex.com">Резюме</a></li>
        <li>
          <a class="menu__link" href="https://t.me/temirsultanov">
            Принять на работу
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>
<style>
.menu {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0 20px;
}
.links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.menu__link {
  color: #000000;
  font-weight: 700;
  font-size: 40px;
}
.menu__link:hover {
  color: #318855;
}
</style>
