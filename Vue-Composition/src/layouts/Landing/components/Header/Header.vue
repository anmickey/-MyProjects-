<script lang="ts" setup>
  import Scrollbar from './components/Scrollbar.vue';
  import InlineSvg from 'vue-inline-svg';
  import { useEventHandler, $, Logo } from '@/components/index';

  const scroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 100) {
      $(`.header`).add('show');
    } else {
      $(`.header`).remove('show');
    }
  };

  useEventHandler('scroll', scroll);
</script>

<template>
  <header class="header">
    <div class="header__wrap container-header">
      <Logo />
      <ul class="right">
        <li class="header__int">
          <InlineSvg :src="require('@/media/img/icons/inst.svg')" aria-label="My image"></InlineSvg>
        </li>
        <li class="header__int">
          <InlineSvg :src="require('@/media/img/icons/face.svg')" aria-label="My image"></InlineSvg>
        </li>
        <li class="header__int">
          <InlineSvg :src="require('@/media/img/icons//twitter.svg')" aria-label="My image"></InlineSvg>
        </li>
      </ul>
    </div>
    <Scrollbar />
  </header>
</template>

<style lang="scss">
  @import './header.scss';
</style>
