<script lang="ts" setup>
  import { ref } from 'vue';
  import { $, useUser, ButtonLink, P, scrollTo, SpinnerComp } from '@/components/index';

  const { isAuth } = useUser();
  const load = ref(true);

  const onLoad = () => {
    load.value = false;
    $('.banner__item, .banner__title').add('show');
  };
</script>

<template>
  <div class="banner">
    <div class="banner__wrap">
      <SpinnerComp v-if="load" class="big" />

      <div class="banner__videowrap">
        <video data-keepplaying playsinline autoplay muted loop @loadeddata="onLoad">
          <source src="" type="video/webm" />
          <source src="@/media/video/statistic.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="banner__background"></div>
      <div class="banner__container container">
        <div class="banner__body">
          <div class="banner__title">
            <h1 class="c__w">Providing good relations to your customers</h1>
          </div>
          <div v-if="!isAuth" class="banner__homepage">
            <div class="banner__item">
              <ButtonLink :parameters="{ width: '9rem', height: '4.5rem' }" link="login"
                ><P size="l" class="c__w">Try free</P></ButtonLink
              >
            </div>
          </div>
          <div v-else class="banner__homepage">
            <div class="banner__item show">
              <ButtonLink :parameters="{ width: '15rem', height: '4.5rem' }" link="login"
                ><P size="l" class="c__w">System Dashboard</P></ButtonLink
              >
            </div>
          </div>
        </div>
      </div>

      <div class="banner__arrow">
        <i class="material-icons c__w" @click.prevent="scrollTo('block1', true)">expand_more</i>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './Banner.scss';
</style>
