<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Category",
  setup() {
    const sliderRef: any = ref(null);

    onMounted(() => {
      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      if (!sliderRef.value) return;
      sliderRef.value.addEventListener("mousedown", (e: MouseEvent) => {
        isDown = true;
        sliderRef.value.classList.add("active");
        startX = e.pageX - sliderRef.value.offsetLeft;
        scrollLeft = sliderRef.value.scrollLeft;
      });
      sliderRef.value.addEventListener("mouseleave", () => {
        isDown = false;
        sliderRef.value.classList.remove("active");
      });
      sliderRef.value.addEventListener("mouseup", () => {
        isDown = false;
        sliderRef.value.classList.remove("active");
      });
      sliderRef.value.addEventListener("mousemove", (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.value.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        sliderRef.value.scrollLeft = scrollLeft - walk;
      });
    });

    return { sliderRef };
  },
  components: {},
});
</script>

<template>
  <div class="shows-wrapper flex row" ref="sliderRef">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.shows-wrapper {
  gap: 15px;
  overflow-x: auto;
  cursor: pointer;
  padding-bottom: 10px;
}

@media (max-width: $medium-width) {
  .shows-wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
