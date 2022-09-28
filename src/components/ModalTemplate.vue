<script>
export default {
  props: {
    title: {
      type: String,
    },
    inputPlaceholder: {
      type: String,
    },
    inputValue: {
      type: String,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonType: {
      type: String,
      required: true,
    },
  },
  emits: {
    close: null,
    buttonClick: null,
  },
  data() {
    return {
      inputString: this.inputValue || "",
    };
  },
  computed: {
    isInputExist() {
      return this.inputPlaceholder || this.inputValue;
    },
    buttonClass() {
      let result;
      if (this.buttonType === "success") {
        result = "modal__button-success";
      } else {
        result = "modal__button-danger";
      }

      return result;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onButtonClick() {
      this.$emit("buttonClick", this.inputString.trim());
    },
    closeOnEscape(event) {
      if (event.key === "Escape") this.close();
    },
  },
  mounted() {
    window.addEventListener("keydown", this.closeOnEscape);
    if (this.isInputExist) {
      this.$refs.input.focus();
    }
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.closeOnEscape);
  },
};
</script>

<template>
  <div @click="close" class="modal">
    <div @click.stop class="modal__content">
      <h3 v-if="title" class="modal__title text-small">{{ title }}</h3>
      <form>
        <input
          v-if="isInputExist"
          v-model="inputString"
          :placeholder="inputPlaceholder"
          @keydown.enter="onButtonClick"
          ref="input"
          class="modal__input text-small"
        />
        <div class="modal__buttonsWrapper">
          <button @click="close" class="modal__button text-small">
            Отмена
          </button>
          <button
            @click.prevent="onButtonClick"
            :class="buttonClass"
            class="modal__button text-small"
          >
            {{ buttonText }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--blackWithOpacity);
}
.modal__content {
  width: var(--blockWidth);
  padding: var(--blockPadding);
  border-radius: var(--borderRadius);
  background-color: var(--white);
  box-shadow: var(--blockBoxShadow);
}
.modal__title {
  margin-bottom: 20px;
}
.modal__input {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 0 15px;

  border: 2px solid var(--grey);
  border-radius: var(--borderRadius);
  outline: 0;

  background-color: var(--white);
  color: var(--black);
  -webkit-appearance: none;
}
.modal__input:focus {
  border-color: var(--black);
}
.modal__buttonsWrapper {
  display: flex;
  justify-content: space-between;
}
.modal__button {
  width: calc(50% - 5px);
  height: 40px;
  border: 0;
  border-radius: var(--borderRadius);

  background-color: var(--grey);
  color: var(--black);
}
.modal__button:hover {
  background-color: #c1c1c1;
  cursor: pointer;
}
.modal__button:active {
  background-color: #a1a1a1;
}
.modal__button-success {
  background-color: var(--green);
  color: var(--white);
}
.modal__button-success:hover {
  background-color: var(--hoverGreenButton);
}
.modal__button-success:active {
  background-color: var(--activeGreenButton);
}
.modal__button-danger {
  background-color: var(--red);
  color: var(--white);
}
.modal__button-danger:hover {
  background-color: var(--hoverRedButton);
}
.modal__button-danger:active {
  background-color: var(--activeRedButton);
}
</style>
