<script setup lang="ts">
  import Header from './Landing/components/Header/Header.vue';
  import Sidebar from './Landing/components/Sidebar/Sidebar.vue';
</script>

<template>
  <Header />
  <Sidebar block-name-f="About" block-name-s="Platform" whereF="block2" whereS="block1" />
  <Sidebar block-name-f="Manage" block-name-s="Application" :right="true" whereF="block3" whereS="block4" />
  <slot />
</template>
