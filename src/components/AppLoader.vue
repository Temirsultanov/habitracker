<script>
import LoaderIcon from "./icons/LoaderIcon.vue";

export default {
  components: {
    LoaderIcon,
  },
};
</script>

<template>
  <div class="backdrop">
    <loader-icon class="loader"></loader-icon>
  </div>
</template>

<style>
.backdrop {
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 5;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--blackWithOpacity);
}
.loader {
  animation: 0.5s loader cubic-bezier(0.5, 0.3, 0.45, 0.65) infinite;
}
@keyframes loader {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
