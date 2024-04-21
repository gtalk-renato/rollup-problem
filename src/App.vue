<script setup lang="ts">
import { RouterView } from 'vue-router'
import PreLoader from './components/PreLoader.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
</script>

<template>
  <main>
    <PreLoader></PreLoader>
    <PageHeader></PageHeader>
    <RouterView></RouterView>>
    <PageFooter></PageFooter>
  </main>
</template>

<style scoped></style>
