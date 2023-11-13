<script lang="ts" setup>
  import Spinner from '../Spinner/Spinner.vue';
  import { CSSProperties, PropType, defineProps } from 'vue';
  defineProps({
    forForm: { type: String, required: true },
    load: { type: Boolean, default: false },
    parameters: { type: Object as PropType<CSSProperties>, required: true },
  });
</script>

<template>
  <button type="submit" :form="forForm" class="btn" :style="[parameters]">
    <slot v-if="!load"></slot>
    <Spinner v-else />
  </button>
</template>

<style lang="scss">
  @import './button.scss';
</style>
