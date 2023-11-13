<script lang="ts" setup>
  import { useObserve, H, InfoBlock, InfoParentBlock } from '@/components/index';
  import { onMounted } from 'vue';

  onMounted(() => {
    useObserve(`.parentrinfo`, '.partner');
  });
</script>

<template>
  <div class="partner" data-below="block3">
    <div class="partner__container container">
      <div class="partner__wrap row">
        <div class="partner__body">
          <div class="partner__title">
            <H class="c__g_dl" size="h2">We're a dedicated team that's here to help</H>
          </div>

          <InfoParentBlock class="parentrinfo">
            <InfoBlock
              title="Your Business!"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus minima incidunt nulla accusantium excepturi
                  pariatur!"
            />
            <InfoBlock
              title="Data Security"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, ab."
            />
            <InfoBlock
              title="Manage Your Calls"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores odit impedit, hic ipsam architecto
                  soluta!"
            />
            <InfoBlock
              title="Backup"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, autem."
            />
            <InfoBlock
              title="Backup"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, autem."
            />
          </InfoParentBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './partners.scss';
</style>
