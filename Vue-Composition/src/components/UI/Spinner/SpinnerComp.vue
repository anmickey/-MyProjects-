<script setup lang="ts">
  import { defineProps } from 'vue';
  import { Spinner } from '@/components';
  defineProps({
    load: { type: Boolean, default: false },
  });
</script>
<template>
  <div class="spinnercomp" :class="{ load }">
    <div class="spinnercomp__wrap"><Spinner /></div>
  </div>
</template>
<style lang="scss">
  @import './spinner.scss';
</style>
