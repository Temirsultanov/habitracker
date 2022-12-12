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
    "delete-habit": null,
  },
  data() {
    return {
      attrs: {
        title: `Вы уверены, что хотите  удалить привычку «${this.habitTitle}»?`,
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
