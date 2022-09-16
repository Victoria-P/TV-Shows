<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Category",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
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
});
</script>

<template>
  <div>
    <div class="title">{{ title }}</div>

    <div class="shows-wrapper flex row" ref="sliderRef">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shows-wrapper {
  gap: 15px;
  overflow-x: auto;
  cursor: pointer;
  padding-bottom: 10px;
}

.title {
  margin: 20px 0px;
}

@media (max-width: $medium-width) {
  .shows-wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }

  .title {
    text-align: center;
  }
}
</style>
