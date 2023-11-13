<script setup lang="ts">
  import { defineProps } from 'vue';
  import { useEventHandler, $, P } from '@/components/';

  defineProps({
    title: { type: String, require },
  });

  useEventHandler('click', handlerClick);

  function handlerClick(e: MouseEvent) {
    if ($(e.target as HTMLElement).closest('.dd')) {
      $('.dd').toggle('show');
      $((e.target as HTMLElement).closest('.dd') as HTMLElement)
        .exceptTarget('.dd')
        .remove('show');
    } else {
      $('.dd').remove('show');
    }
  }
</script>
<template>
  <div class="dd dropdown vertical-align">
    <P size="m" class="c__w vertical-align dropdown__title"
      >{{ title }}<i class="material-icons c__w">arrow_drop_down</i></P
    ><slot />
  </div>
</template>
<style lang="scss">
  @import './dropdown.scss';
</style>
