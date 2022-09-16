<script lang="ts">
import type { IShowItem } from "@/types/Interfaces";
import { computed, defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "InfoTable",
  props: {
    showItem: {
      type: Object as PropType<IShowItem>,
      required: true,
    },
  },
  setup(props) {
    const premiereYear = computed(() => {
      if (props.showItem) {
        return new Date(props.showItem.premiered).getFullYear();
      }
    });

    return { premiereYear };
  },
});
</script>

<template>
  <table class="flex-1" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td>Title</td>
        <td class="title">{{ showItem.name }}</td>
      </tr>

      <tr>
        <td>Year</td>
        <td>{{ premiereYear || "-" }}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td>{{ showItem.network?.country.name || "-" }}</td>
      </tr>
      <tr>
        <td>Duration</td>
        <td>{{ showItem.averageRuntime || "-" }}</td>
      </tr>
      <tr>
        <td>Language</td>
        <td>{{ showItem.language || "-" }}</td>
      </tr>
      <tr>
        <td>Genre</td>
        <td>{{ showItem.genres.join(", ") || "-" }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
tr:nth-child(even) {
  background-color: var(--background-color-primary);
}

table {
  margin-left: 25px;
  border: none;

  td:first-child,
  th:first-child {
    border-radius: 16px 0 0 16px;
  }
  td:last-child,
  th:last-child {
    border-radius: 0 16px 16px 0;
  }

  td {
    font-size: 16px;
    padding: 0px 15px;
  }

  td:first-child {
    font-size: 14px;
  }
}

@media (max-width: $medium-width) {
  table {
    margin-left: 0px;
  }
}
</style>
