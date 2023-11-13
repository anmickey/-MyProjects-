<script lang="ts" setup>
  import { defineProps, onMounted } from 'vue';
  import { useEventHandler, scrollTo } from '@/components/index';
  import { scrollspy, shadowSidebar } from './useScrollspy';

  const props = defineProps({
    right: {
      type: Boolean,
      default: false,
    },
    blockNameF: { type: String, require: true },
    blockNameS: { type: String, require: true },
    whereF: { type: String, require: true },
    whereS: { type: String, require: true },
  });

  onMounted(() => {
    shadowSidebar();
  });

  const { spy } = scrollspy(props.right);

  useEventHandler('scroll', spy);
  useEventHandler('resize', shadowSidebar);
</script>

<template>
  <div class="sidebar" :class="{ right }">
    <div class="sidebar__container">
      <div @click.prevent="whereF && scrollTo(whereF)" class="sidebar__item bg__b_gr">
        <p class="c__w">{{ blockNameF }}</p>
      </div>
      <div @click.prevent="whereS && scrollTo(whereS)" class="sidebar__item bg__w">
        <p class="c__gray_gl">{{ blockNameS }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './sidebar.scss';
</style>
