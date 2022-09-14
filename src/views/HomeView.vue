<script lang="ts">
import type { IShowItem } from "@/types/Interfaces";
import { defineComponent, onMounted, ref } from "vue";
import ShowCard from "../components/ShowCard.vue";
import Category from "../components/Category.vue";
import useAPIManager from "@/composables/useAPIManager";
import CutomInput from "../components/CutomInput.vue";

export default defineComponent({
  name: "HomeView",
  setup() {
    const { getAllShows, getSearchResult } = useAPIManager();
    const displayedGenres = ["Adventure", "Fantasy", "Romance"];
    const allShows = ref<IShowItem[]>([]);
    const searchedShows = ref<IShowItem[]>([]);
    const searchQuery = ref<string>("");

    const filterShowsByGenre = (genre: string) => {
      return allShows.value.filter((show) => show.genres.includes(genre));
    };

    const handleSearch = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      searchQuery.value = target ? target.value : "";

      if (searchQuery.value.length > 2) {
        const res = await getSearchResult(searchQuery.value);
        searchedShows.value = res.map(
          (i: { score: number; show: IShowItem }) => i.show
        );
      }
    };

    const handleSearchReset = () => {
      searchQuery.value = "";
      searchedShows.value = [];
    };

    onMounted(async () => {
      allShows.value = await getAllShows();
    });

    return {
      displayedGenres,
      searchQuery,
      searchedShows,
      allShows,
      handleSearch,
      handleSearchReset,
      filterShowsByGenre,
    };
  },
  components: { ShowCard, Category, CutomInput },
});
</script>

<template>
  <div v-if="allShows.length" class="home-wrapper column flex flex-1">
    <CutomInput
      :inputValue="searchQuery"
      placeholder="Search..."
      @handleInput="handleSearch"
      @handleReset="handleSearchReset"
    />

    <div v-if="searchQuery.length > 2">
      <div
        v-if="searchedShows.length"
        class="search-result flex row wrap justify-center"
      >
        <ShowCard
          v-for="item in searchedShows"
          :showItem="item"
          :key="item.id"
        />
      </div>
      <div v-else>
        <div class="flex justify-center title">No results found</div>
      </div>
    </div>

    <div v-else>
      <div v-for="genre in displayedGenres" :key="genre">
        <div class="title">{{ genre }}</div>
        <Category>
          <ShowCard
            v-for="item in filterShowsByGenre(genre)"
            :showItem="item"
            :key="item.id"
          />
        </Category>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-wrapper {
  height: 100%;
  width: 100%;
  max-width: $medium-width;
  overflow-y: auto;

  .title {
    margin: 20px 0px;
  }

  .search-result {
    margin: 20px 0px;
    gap: 15px;
  }
}

@media (max-width: $medium-width) {
  .title {
    text-align: center;
  }
}
</style>
