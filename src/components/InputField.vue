<!-- 
  Code explanation:
  To make v-model (2-way data binding) work with custom input components, the value attribute of the input element must be set to "modelValue", which gets passed as a prop automatically by Vue. Also, the parent component must be informed if the input value changes. V-model in the parent component expects a "update:modelValue" event with the current value passed to it.
 -->

<script setup>
import { ref } from 'vue';
defineProps(['modelValue', 'errMsg'])
const emit = defineEmits(['update:modelValue', 'removeErrMessage'])
const showPassword = ref(false)

function handleInputChange($event) {
  emit('update:modelValue', $event.target.value)
  emit('removeErrMessage')
}
</script>

<template>
  <div class="input-container">
    <input v-bind="$attrs" :type="showPassword ? 'text' : $attrs['type']" :value="modelValue" @input="handleInputChange" :class="[errMsg ? 'invalid' : '']" />
    <i
      v-if="$attrs['type'] === 'password'"
      class="material-icons visbility-icon"
      title="Toggle visibility"
      @click="showPassword = !showPassword"
      >{{ showPassword ? 'visibility_off' : 'visibility'}}</i
    >
    <span class="err-message" v-if="errMsg">{{ errMsg }}</span>
  </div>
</template>

<style scoped>
.input-container {
  position: relative;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  color: var(--text-color);
  outline: none;
  border: none;
  border: 1px solid var(--border-color);
}

input[type='password'] {
  font: small-caption;
  font-size: 1.5rem;
  line-height: 2.08rem;
}

input:focus {
  border-color: var(--border-color-focus);
}

.invalid {
  border: 1px solid var(--border-error-color);
}

.invalid:focus {
  border: 1px solid var(--border-error-color);
}

.err-message {
  color: var(--border-error-color);
  position: absolute;
  height: 43px;
  display: flex;
  align-items: center;
  top: 10px;
  left: 104%;
  font-size: 1.4rem;
  line-height: 1.8rem;
  width: max-content;
  max-width: 320px;
}

.visbility-icon {
  position: absolute;
  top: 0px;
  right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  opacity: 0.2;
  cursor: pointer;
}

.visbility-icon:hover {
  opacity: 0.4;
}

@media only screen and (max-width: 1050px) {
  .err-message {
    position: relative;
    height: auto;
    max-width: 300px;
    top: 0;
    left: 0;
    margin-top: -5px;
    margin-bottom: 20px;
    font-size: 1.32rem;
  }
}
</style>
