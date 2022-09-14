<script lang="ts">
import { defineComponent } from "vue";
import ThemeButton from "./ThemeButton.vue";

export default defineComponent({
  name: "Navigation",
  components: { ThemeButton },
});
</script>

<template>
  <header class="flex justify-between align-center">
    <router-link to="/"> <div class="logo">TV📺Shows</div></router-link>
    <ThemeButton />
  </header>
</template>

<style lang="scss" scoped>
header {
  min-height: 56px;
  background: linear-gradient(
    90deg,
    var(--background-color-secondary),
    rgb(255 255 255 / 0%) 100%
  );
  padding: 10px;
}

.logo {
  font-size: 30px;
  font-weight: 800;
  margin-right: 10px;
}

@media (max-width: $small-width) {
  .logo {
    font-size: 18px;
  }
}
</style>
