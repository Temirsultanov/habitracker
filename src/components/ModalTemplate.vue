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
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onButtonClick() {
      this.$emit("buttonClick", this.inputString.trim());
    },
    onEscape(event) {
      if (event.key === "Escape") this.close();
    },
  },
  created() {
    window.addEventListener("keydown", this.onEscape);
  },
  mounted() {
    if (this.isInputExist) {
      this.$refs.input.focus();
    }
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onEscape);
  },
};
</script>

<template>
  <div class="backdrop" @click="close">
    <div class="block modal" @click.stop>
      <h3 v-if="title" class="modal__title">{{ title }}</h3>
      <form>
        <input
          v-if="isInputExist"
          v-model="inputString"
          :placeholder="inputPlaceholder"
          @keydown.enter="onButtonClick"
          ref="input"
          class="modal__input"
        />
        <div class="buttonsWrapper">
          <button class="modal__button" @click="close">Отмена</button>
          <button
            @click.prevent="onButtonClick"
            :class="
              buttonType === 'success'
                ? 'modal__button-success'
                : 'modal__button-danger'
            "
            class="modal__button"
          >
            {{ buttonText }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
}
.modal__title {
  margin-bottom: 20px;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
}
.modal__input {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  padding: 0 15px;

  border: 1px solid #e5e5e5;
  border-radius: 10px;
  outline: 0;
  font-size: 16px;
}
.modal__input:focus {
  border-color: #3a3a3a;
  box-shadow: none;
}
.buttonsWrapper {
  display: flex;
  gap: 10px;
}
.modal__button {
  height: 40px;
  border: 0;
  border-radius: 10px;

  flex: 1;
  background-color: #e5e5e5;
  font-size: 16px;
}
.modal__button:hover {
  background-color: #c1c1c1;
  cursor: pointer;
}
.modal__button:active {
  background-color: #a1a1a1;
}
.modal__button-success {
  background-color: #168435;
  color: white;
}
.modal__button-success:hover {
  background-color: #11682a;
}
.modal__button-success:active {
  background-color: #105323;
}
.modal__button-danger {
  background-color: #c8435b;
  color: white;
}
.modal__button-danger:hover {
  background-color: #ab2c44;
}
.modal__button-danger:active {
  background-color: #901e33;
}
</style>
