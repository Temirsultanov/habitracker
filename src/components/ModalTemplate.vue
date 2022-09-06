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
  methods: {
    close() {
      this.$emit("close");
    },
    onButtonClick() {
      this.$emit("buttonClick", this.inputString.trim());
    },
  },
  mounted() {
    const input = this.$refs.input;
    if (input) {
      input.focus();
    }
  },
};
</script>

<template>
  <div class="backdrop">
    <div class="modal">
      <h3 v-if="title" class="modal__title">{{ title }}</h3>
      <form>
        <input
          v-if="inputPlaceholder || inputValue"
          v-model="inputString"
          :placeholder="inputPlaceholder"
          ref="input"
          class="modal__input"
          @keydown.enter="onButtonClick"
        />
        <div class="buttonsWrapper">
          <button class="modal__button" @click="close">Отмена</button>
          <button
            @click.prevent="onButtonClick"
            class="modal__button"
            :class="
              buttonType === 'success'
                ? 'modal__button-success'
                : 'modal__button-danger'
            "
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
.modal {
  width: 335px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
}
.modal__title {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 20px;
}
.modal__input {
  width: 100%;
  height: 40px;
  padding: 0 15px;
  margin-bottom: 10px;

  border: 1px solid #e5e5e5;
  border-radius: 10px;
  font-size: 16px;
}
.buttonsWrapper {
  display: flex;
  gap: 10px;
}
.modal__button {
  border: 0;
  border-radius: 10px;
  background-color: #e5e5e5;
  font-size: 16px;
  height: 40px;
  flex: 1;
}
.modal__button:hover {
  background-color: #c1c1c1;
  cursor: pointer;
}
.modal__button:active {
  background-color: #a1a1a1;
  cursor: pointer;
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
