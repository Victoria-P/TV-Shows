<script lang="ts">
import router from "@/router";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackBtn",
  setup() {
    const goBack = () => {
      router.go(-1);
    };

    return { goBack };
  },
});
</script>

<template>
  <img
    @click="goBack"
    src="../assets/back-icon.svg"
    alt="Back button"
    class="back-btn"
  />
</template>

<style lang="scss" scoped>
.back-btn {
  transform: scale(1.5);
  height: 20px;
  width: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}

.dark-theme .back-btn {
  filter: invert(100%);
}

@media (max-width: $medium-width) {
  .back-btn {
    top: 10px;
    left: 10px;
  }
}
</style>
