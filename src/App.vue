<script>
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
  },
  data() {
    return {
      habits: null,
    };
  },
  created() {
    // this.$watch(() => this.$route);
    // I forgot what is it...
  },
};
</script>

<template>
  <main class="app__content">
    <router-view></router-view>
  </main>
</template>

<style>
.app__content {
  margin-top: 60px;
  padding-top: 40px;
}
</style>
