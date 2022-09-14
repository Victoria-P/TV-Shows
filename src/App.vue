<script setup lang="ts">
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />

  <main class="flex column flex-1">
    <RouterView />
  </main>
</template>
