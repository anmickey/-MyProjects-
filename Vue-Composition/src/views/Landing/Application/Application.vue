<script lang="ts" setup>
  import { useObserve, H, P } from '@/components';
  import { onMounted } from 'vue';

  onMounted(() => {
    useObserve(`.application__title`, '.application__text, .application__title, .application__apps');
  });
</script>

<template>
  <div class="application" data-below="block4">
    <div class="application__main container">
      <div class="application__wrap">
        <div class="application__block">
          <div class="application__img"></div>
        </div>
        <div class="application__container">
          <div class="application__title">
            <H class="c__w" size="h2">Always with you</H>
          </div>
          <div class="application__text">
            <P size="m" class="c__w"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, facere dolorum, alias doloremque esse
              fugit eos ullam, a consequatur quia ipsam nemo officiis maiores harum nisi incidunt labore ad nobis.</P
            >
          </div>
          <div class="application__apps">
            <div class="application__app"></div>
            <div class="application__app"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './application.scss';
</style>
