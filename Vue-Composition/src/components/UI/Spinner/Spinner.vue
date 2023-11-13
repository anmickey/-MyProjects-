<script setup lang="ts">
  import InlineSvg from 'vue-inline-svg';
</script>
<template>
  <div class="spinner">
    <div class="spinner__icon">
      <InlineSvg :src="require('@/media/img/icons/loop.svg')" aria-label="My image"></InlineSvg>
    </div>
  </div>
</template>
<style lang="scss">
  @import './spinner.scss';
</style>
