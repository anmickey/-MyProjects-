<script lang="ts" setup>
  import { defineProps, ref } from 'vue';
  import { H, P, $ } from '@/components/index';

  defineProps({
    text: { type: String, required: true },
    title: { type: String, required: true },
  });

  const collapse = ref(false);

  const handlerClick = ({ target }: MouseEvent) => {
    if ($(target as HTMLElement).closest('h3')) {
      collapse.value = !collapse.value;
    }
  };
</script>

<template>
  <li class="InfoBlock__block">
    <div :class="['InfoBlock__title']">
      <H size="h3" class="c__g_dl" @click="handlerClick">
        {{ title }}<i :class="[{ collapse }, 'InfoBlock__icons']"></i>
      </H>
    </div>
    <div :class="[{ collapse }, 'InfoBlock__body']">
      <P size="m" class="c__g_l">{{ text }}</P>
    </div>
  </li>
</template>

<style lang="scss">
  @import './InfoBlock.scss';
</style>
