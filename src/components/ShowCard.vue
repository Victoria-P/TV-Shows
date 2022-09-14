<script lang="ts">
import type { IShowItem } from "@/types/Interfaces";
import { computed, defineComponent, type PropType } from "vue";
import Rating from "./Rating.vue";

export default defineComponent({
  name: "ShowCard",
  props: {
    showItem: {
      type: Object as PropType<IShowItem>,
      required: true,
    },
  },
  setup(props) {
    const premiereYear = computed(() => {
      return new Date(props.showItem.premiered).getFullYear();
    });

    return { premiereYear };
  },
  components: { Rating },
});
</script>

<template>
  <router-link :to="`/shows/${showItem.id}`">
    <div class="show-card flex justify-between column">
      <div>
        <img
          :src="
            showItem.image
              ? showItem.image.medium
              : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'
          "
          :alt="showItem.name"
          class="show-image"
        />
      </div>

      <div class="name">{{ showItem.name }}</div>
      <div class="flex row description">
        <Rating :averageRating="showItem.rating.average" />
        <div class="year flex align-center">{{ premiereYear }}</div>
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.show-card {
  background-color: var(--background-color-secondary);
  border-radius: 25px;
  padding: 20px;
  height: fit-content;
  width: 200px;

  .name {
    font-weight: bold;
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
  }

  .show-image {
    height: auto;
    width: 100%;
    border-radius: 16px;
  }

  .year {
    color: $red;
    font-weight: bold;
    font-size: 14px;
    padding-left: 2px;
  }
}

@media (max-width: $small-width) {
  a,
  .show-card {
    width: 100%;
    min-width: 250px;
  }
}
</style>
