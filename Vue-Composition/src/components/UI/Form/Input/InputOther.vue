<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue';
  import { P } from '@/components/';

  const props = defineProps({
    lableText: { type: String, required: true },
    type: { type: String, default: 'text' },
    name: { type: String, required: true },
    id: { type: String, required: true },
    placeholder: { type: String, required: true },
    input: { type: String, required: true },
    valid: { type: Boolean, required: true },
    hidden: { type: Boolean, default: false },
    required: { type: Boolean, default: true },
  });

  const emit = defineEmits(['update:input']);

  function change(e: Event): void {
    let value = (e.target as HTMLInputElement).value;
    emit('update:input', value);
  }
  function checkValue(e: KeyboardEvent) {
    const key = e.key;

    if (!props.name.includes('number')) {
      return true;
    } else if ((key >= '0' && key <= '9') || key == 'Backspace' || ((e.ctrlKey || e.metaKey) && e.keyCode == 65)) {
      return true;
    } else {
      e.preventDefault();
    }
  }
</script>

<template>
  <div class="input-other" :class="{ invalid: valid, hidden }">
    <div class="input-other__text" :class="{ 'input-other__disabled': id.includes('disabled') }">
      <P size="m" class="c__g_l" :class="{ hidden: hidden || !required }"><span class="c__b_l">*</span></P>
      <P size="m" class="c__g_l">{{ lableText }}</P>
    </div>
    <div class="input-other__item">
      <input
        :disabled="id.includes('disabled')"
        :value="input"
        @input="change"
        :placeholder="placeholder"
        :id="id"
        :type="type"
        :name="name"
        @keydown="checkValue"
      />
    </div>
  </div>
</template>

<style lang="scss">
  @import './style/InputOther.scss';
</style>
