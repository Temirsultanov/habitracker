<script>
import ModalTemplate from "./ModalTemplate.vue";
export default {
  components: {
    ModalTemplate,
  },
  props: {
    habitName: {
      type: String,
      required: true,
    },
  },
  emits: {
    close: null,
    changeName: null,
  },
  data() {
    return {
      attrs: {
        inputValue: this.habitName,
        buttonText: "Сохранить",
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
      this.$emit("change-name", newHabitName);
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
