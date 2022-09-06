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
    deleteHabit: null,
  },
  data() {
    return {
      attrs: {
        title: `Вы уверены, что хотите  удалить привычку «${this.habitName}»?`,
        buttonText: "Удалить",
        buttonType: "danger",
      },
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onButtonClick() {
      this.$emit("delete-habit");
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
