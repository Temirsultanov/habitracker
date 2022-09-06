<script>
import ModalTemplate from "./ModalTemplate.vue";
import { addHabit } from "../api.js";
export default {
  components: {
    ModalTemplate,
  },
  emits: {
    close: null,
  },
  data() {
    return {
      attrs: {
        inputPlaceholder: "Например: Вставать в 6 утра",
        buttonText: "Добавить",
        buttonType: "success",
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onButtonClick(newHabitName) {
      if (newHabitName === "") return;

      this.close();
      addHabit(newHabitName);
    },
  },
};
</script>
<template>
  <modal-template
    v-bind="attrs"
    @close="close"
    @button-click="onButtonClick"
  ></modal-template>
</template>
