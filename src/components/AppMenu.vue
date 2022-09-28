<script>
import CrossIcon from "./icons/CrossIcon.vue";
import RightArrowBigIcon from "./icons/RightArrowBigIcon.vue";
import DownloadIcon from "./icons/DownloadIcon.vue";

export default {
  components: {
    CrossIcon,
    RightArrowBigIcon,
    DownloadIcon,
  },
  emits: {
    "close-menu": null,
  },
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
  },
};
</script>

<template>
  <section class="menu">
    <button @click="closeMenu" class="menu__closeButton">
      <cross-icon></cross-icon>
    </button>
    <nav class="menu__nav">
      <ul class="menu__links">
        <li>
          <a class="menu__link menu__link-big" href="http://temirsultanov.t.me">
            Telegram <right-arrow-big-icon></right-arrow-big-icon>
          </a>
        </li>
        <li>
          <a
            class="menu__link menu__link-big"
            href="http://temirsultanov.github.io/cv"
          >
            Резюме <right-arrow-big-icon></right-arrow-big-icon>
          </a>
        </li>
        <li>
          <a
            class="menu__link menu__link-small"
            href="https://temirsultanov.github.io/cv/cv.pdf"
            download
          >
            Скачать cv.pdf <download-icon></download-icon>
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
  padding: 13px 0px 80px 0px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--white);
}
.menu__closeButton {
  margin-left: 13px;
  padding: 17px;
  align-self: start;

  border: 0;
  background-color: transparent;
}
.menu__closeButton:hover {
  cursor: pointer;
}
.menu__closeButton:hover path {
  fill: var(--red);
}
.menu__links {
  display: flex;
  flex-direction: column;
}
.menu__link {
  width: 100%;
  padding: 20px 30px;

  display: flex;
  align-items: center;

  color: var(--black);
}
.menu__link-big {
  border-bottom: 2px solid var(--grey);
  justify-content: space-between;

  font-size: 40px;
  font-weight: 700;
}
.menu__link-small {
  font-size: 25px;
  gap: 12px;
}
.menu__link:hover {
  color: var(--green);
}
.menu__link:active {
  color: var(--hoverGreenButton);
}
.menu__closeButton:hover path {
  fill: var(--red);
}
.menu__closeButton:active path {
  fill: var(--hoverRedButton);
}
.menu__link:hover path,
.menu__link:hover rect {
  fill: var(--green);
}
.menu__link:active path,
.menu__link:active rect {
  fill: var(--hoverGreenButton);
}
</style>
