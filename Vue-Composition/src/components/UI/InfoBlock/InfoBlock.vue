<script lang="ts" setup>
  import { defineProps, ref } from 'vue';
  import { H, P, $ } from '@/components/index';

  defineProps({
    text: { type: String, required: true },
    title: { type: String, required: true },
  });

  const show = ref(false);

  const handlerClick = (event: MouseEvent) => {
    if ($(event.target as HTMLElement).closest('h3')) {
      show.value = !show.value;
    }
  };
</script>

<template>
  <li class="InfoBlock__block">
    <div :class="['InfoBlock__title']">
      <H size="h3" class="c__g_dl" @click="handlerClick">
        {{ title }}<i :class="[{ show }, 'InfoBlock__icons']"></i>
      </H>
    </div>
    <div :class="[{ show }, 'InfoBlock__body']">
      <P size="m" class="c__g_l">{{ text }}</P>
    </div>
  </li>
</template>

<style lang="scss">
  @import './infoblock.scss';
</style>
