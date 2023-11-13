<script lang="ts" setup>
  import { useObserve, H, InfoParentBlock, InfoBlock } from '@/components/index';
  import { onMounted } from 'vue';

  onMounted(() => {
    useObserve(`.aboutusinfo`, '.aboutus');
  });
</script>

<template>
  <div class="aboutus" data-below="block1">
    <div class="aboutus__container container">
      <div class="aboutus__wrap row">
        <div class="aboutus__body">
          <div class="aboutus__title">
            <H size="h2" class="c__g_dl">Swap world CRM</H>
          </div>
          <InfoParentBlock class="aboutusinfo">
            <InfoBlock
              title="Fully Customizable"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus minima incidunt nulla accusantium excepturi
                  pariatur!"
              class="aboutusinfo__block"
            ></InfoBlock>
            <InfoBlock
              title="Flexible Solutions"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, ab."
              class="aboutusinfo__block"
            ></InfoBlock>
            <InfoBlock
              title="Personalization"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Asperiores odit impedit, hic ipsam architecto
                  soluta!"
              class="aboutusinfo__block"
            ></InfoBlock>
            <InfoBlock
              title="Support"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, autem."
              class="aboutusinfo__block"
            ></InfoBlock>
          </InfoParentBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './aboutus.scss';
</style>
