<script lang="ts" setup>
  import { CSSProperties, PropType, defineProps } from 'vue';

  defineProps({
    link: { type: String, required: true },
    parameters: { type: Object as PropType<CSSProperties>, required: true },
    disabled: { type: Boolean, default: false },
  });
</script>

<template>
  <RouterLink :to="link">
    <button :disabled="disabled" class="btn" :style="[parameters]">
      <slot></slot>
    </button>
  </RouterLink>
</template>

<style lang="scss">
  @import './button.scss';
</style>
