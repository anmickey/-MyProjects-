<script lang="ts" setup>
  import { defineEmits, defineProps, PropType, reactive } from 'vue';
  import { ValidConf } from './input.config';
  import { P } from '@/components';

  const props = defineProps({
    lableText: { type: String, required: true },
    type: { type: String, default: 'text' },
    name: { type: String, required: true },
    placeholder: { type: String, required: true },
    input: { type: String, required: true },
    valid: { type: Object as PropType<ValidConf>, required: true },
    defaultmess: { type: String },
  });

  const emits = defineEmits(['update:input']);
  const pass = reactive({
    icon: true,
    type: true,
  });

  function keydownHandler(e: KeyboardEvent) {
    const key = e.key;
    if (props.name.includes('number')) {
      if ((key >= '0' && key <= '9') || key == 'Backspace' || ((e.ctrlKey || e.metaKey) && e.keyCode == 65)) {
        return true;
      } else {
        e.preventDefault();
      }
    } else {
      return true;
    }
  }

  function changeIconHandler() {
    pass.icon = !pass.icon;
    pass.type = !pass.type;
  }

  function changetype() {
    return pass.type ? 'password' : 'text';
  }
</script>

<template>
  <div class="input" :class="{ invalid: valid.state, add: input !== '' }">
    <div class="input__block">
      <input
        :value="input"
        @input.stop="emits('update:input', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        :id="name"
        :type="type.includes('password') ? changetype() : type"
        :name="name"
        @keydown.stop="keydownHandler"
      />
      <label class="c__g_l" :for="name">{{ lableText }}</label>
      <i
        v-if="type.includes('password')"
        @click.prevent="changeIconHandler"
        class="c__g_dl-l input__icon material-icons"
        >{{ pass.type ? 'visibility' : 'visibility_off' }}</i
      >
    </div>
    <div class="input__text" :class="{ show: valid.message || defaultmess }">
      <P size="s">{{ valid.message || defaultmess }}</P>
    </div>
  </div>
</template>

<style lang="scss">
  @import './style/input.scss';
</style>
