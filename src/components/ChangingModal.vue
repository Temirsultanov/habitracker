<script>
import ModalTemplate from "./ModalTemplate.vue";

export default {
  components: {
    ModalTemplate,
  },
  props: {
    habitTitle: {
      type: String,
      required: true,
    },
  },
  emits: {
    close: null,
    "change-title": null,
  },
  data() {
    return {
      attrs: {
        inputValue: this.habitTitle,
        buttonText: "Сохранить",
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
      this.$emit("change-title", newHabitTitle);
      this.close();
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
