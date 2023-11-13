<script lang="ts" setup>
  import { defineProps } from 'vue';

  defineProps({
    size: { type: String, required: true },
    another: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <component :is="size" v-bind:class="[another, 'custom']"><slot></slot></component>
</template>

<style lang="scss">
  @import '@/assets/mixins/_colorMixins.scss';
  @import '@/assets/mixins/_breakpoints.scss';
  @import '@/assets/components/_fonts.scss';
  h1.custom,
  h2.custom,
  h3.custom,
  h5.custom,
  h4.custom {
    font-family: $global-fonts !important;
  }
  h1.custom {
    font-size: 4.5rem;
    letter-spacing: 0.2rem;
    line-height: 1.2;
  }
  h2.custom {
    font-size: 3.5rem;
    line-height: 1;
  }
  h3.custom {
    font-size: 2.8rem;
    font-weight: 400 !important;
  }
  h4.custom {
    font-size: 2.2rem;
    font-weight: 400 !important;
  }
  h5.custom {
    font-size: 1.8rem;
    font-weight: 400 !important;
  }
  @media screen and (max-width: 800px) {
    h1.custom {
      font-size: 3rem;
      line-height: 3rem;
    }
  }

  @include breakpoint(onetwo) {
    h1.custom {
      font-size: 2.7rem;
    }
    h2.custom {
      font-size: 2.5rem;
    }
    h3.custom {
      font-size: 2rem;
    }
    h4.custom {
      font-size: 1.8rem;
    }
  }
</style>
