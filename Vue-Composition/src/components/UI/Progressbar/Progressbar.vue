<script setup lang="ts">
  import { ref, onUnmounted, watch } from 'vue';
  import random from 'lodash.random';
  import { useLoad } from '@/components/index';

  let timeoutId: number | undefined;

  const { isLoading } = useLoad();
  const progress = ref(0);
  const isVisible = ref(false);

  watch(
    () => isLoading.value,
    function () {
      if (isLoading.value) {
        start();
      } else {
        stop();
      }
    },
  );

  onUnmounted(() => {
    clearTimeout(timeoutId);
  });

  const start = () => {
    isVisible.value = true;
    progress.value = 0;
    loop();
  };

  const loop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (+progress.value >= 90) {
      return;
    }
    const size = (90 - 0) / (8000 / 1000);
    const p = Math.round(+progress.value + random(size * (1 - 0.5), size * (1 + 0.5)));
    progress.value = Math.min(p, 90);
    timeoutId = setTimeout(loop, random(1000 * (1 - 0.5), 1000 * (1 + 0.5)));
  };

  const stop = () => {
    progress.value = 100;
    clearTimeout(timeoutId);
    setTimeout(() => {
      isVisible.value = false;
    }, 200);
  };
</script>

<template>
  <div
    class="progressbar"
    :class="{
      visible: isVisible,
    }"
  >
    <!-- <div class="progressbar__container">
      <svg class="progressbar__svg">
        <circle
          cx="80"
          cy="80"
          r="70"
          class="progressbar__svg-circle circle-html shadow-html"
          :style="{
            strokeDashoffset: 440 - (440 * progress) / 100,
          }"
        ></circle>
      </svg>
      <H size="h3" another="progressbar__text shadow-html">{{ progress }}%</H>
    </div> -->

    <div class="box">
      <div class="shadow" />
      <div class="content">
        <div class="percent" data-text="CRM" style="--num: 85">
          <!-- <div class="dot" /> -->
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle
              cx="70"
              cy="70"
              r="70"
              :style="{
                strokeDashoffset: 440 - (440 * progress) / 100,
              }"
            ></circle>
          </svg>
        </div>
        <div class="number">
          <h2>{{ progress }}<span>%</span></h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './progressbar.scss';
</style>
