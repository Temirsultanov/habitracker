<script>
import ModalTemplate from "./ModalTemplate.vue";
export default {
  components: {
    ModalTemplate,
  },
  emits: {
    close: null,
    "add-habit": null,
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
    onButtonClick(newHabitTitle) {
      if (newHabitTitle === "") return;

      this.close();
      this.$emit("add-habit", newHabitTitle);
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
