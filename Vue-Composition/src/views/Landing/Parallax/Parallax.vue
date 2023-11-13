<script lang="ts" setup>
  import { H, P } from '@/components/';
</script>

<template>
  <div class="parallax" data-below="block2">
    <div class="parallax__container">
      <div class="parallax__img"><div class="parallax__background"></div></div>
      <div class="parallax__wrap container">
        <div class="parallax__body">
          <div class="parallax__title">
            <H class="c__g_dl" size="h2">Get to know us without any committments </H>
          </div>
          <div class="parallax__text">
            <P size="m" class="c__g_l"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est perferendis nesciunt cum quaerat
              reiciendis eveniet impedit delectus ipsa beatae dolores asperiores illo omnis sed dolorem eum, quidem,
              aliquam quam, iste aliquid rem a? Harum deserunt ipsa nisi soluta labore!</P
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @import './parallax.scss';
</style>
