<script lang="ts" setup>
  import { useEventHandler, $ } from '@/components/index';

  const scroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    $('.scrollbar__indicator').style('width', scrolled + '%');
  };

  useEventHandler('scroll', scroll);
</script>

<template>
  <section class="scrollbar"><div class="scrollbar__indicator"></div></section>
</template>

<style lang="scss">
  @import './scrollbar.scss';
</style>
