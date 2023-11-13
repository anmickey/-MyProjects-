<script lang="ts" setup>
  import { defineProps } from 'vue';

  defineProps({
    size: { type: String, required: true },
  });
</script>

<template>
  <p :class="size"><slot></slot></p>
</template>

<style lang="scss">
  @import '@/assets/mixins/_colorMixins.scss';
  @import '@/assets/mixins/_breakpoints.scss';
  @import '@/assets/components/_fonts.scss';

  p {
    font-family: $global-fonts;
  }
  p.s {
    font-size: 1rem;
  }
  p.m {
    font-size: 1.3rem;
  }
  p.l {
    font-size: 1.5rem;
  }
</style>
