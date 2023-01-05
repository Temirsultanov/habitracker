<script>
export default {
  props: {
    modelValue: String,
  },
  emits: {
    "update:modelValue": null,
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="appInput text-small"
    ref="input"
  />
</template>
<style>
.appInput {
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
.appInput:focus {
  border-color: var(--black);
}
</style>
