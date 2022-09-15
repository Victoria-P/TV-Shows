<script lang="ts">
import useAPIManager from "@/composables/useAPIManager";
import router from "@/router";
import type { IShowItem } from "@/types/Interfaces";
import { computed, defineComponent, onMounted, ref } from "vue";
import Rating from "../components/Rating.vue";
import InfoTable from "../components/InfoTable.vue";

export default defineComponent({
  name: "ShowItemView",
  setup() {
    const { getShowItem } = useAPIManager();
    const showItem = ref<IShowItem>();

    onMounted(async () => {
      const id = router.currentRoute.value.params.id as string;
      if (id) showItem.value = await getShowItem(id);
    });

    const description = computed(() => {
      if (showItem.value) {
        return showItem.value.summary.replace(/<\/?[^>]+(>|$)/g, "");
      }
    });

    return { showItem, description };
  },
  components: { Rating, InfoTable },
});
</script>

<template>
  <div v-if="showItem" class="show-item">
    <div class="main-info flex">
      <div class="flex justify-center">
        <img
          :src="showItem.image.medium"
          :alt="showItem.name"
          class="show-image"
        />
      </div>
      <InfoTable :showItem="showItem" />
    </div>
    <div class="description-wrapper">
      <div class="header flex justify-between">
        <div class="title">Description</div>
        <div class="flex row align-center">
          <div class="rating">{{ showItem.rating.average }}</div>
          <Rating :averageRating="showItem.rating.average" />
        </div>
      </div>

      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.show-item {
  max-width: $medium-width;
  padding: 30px;
  background-color: var(--background-color-secondary);
  border-radius: 25px;
}

.show-image {
  border-radius: 16px;
}

.main-info {
  flex-direction: row;
}

.description-wrapper {
  margin-top: 20px;
  border-radius: 25px;
  padding: 20px;
  background-color: var(--background-color-primary);

  .description {
    max-height: 300px;
    overflow-y: auto;
  }

  .rating {
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
  }

  .header {
    flex-direction: row;
  }
}

@media (max-width: $medium-width) {
  .show-item {
    padding: 10px;

    .description {
      max-height: none;
    }
  }
}

@media (max-width: $small-width) {
  .main-info {
    flex-direction: column;
  }

  .description-wrapper {
    .header {
      flex-direction: column;
    }
  }
}
</style>
