<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Rating",
  props: {
    averageRating: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const rating = computed(() => {
      return (props.averageRating / 10) * 100;
    });
    return { rating };
  },
});
</script>

<template>
  <div class="ratings">
    <div class="empty-stars"></div>
    <div class="full-stars" :style="{ width: rating + '%' }"></div>
  </div>
</template>

<style lang="scss" scoped>
.ratings {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #b1b1b1;
  overflow: hidden;
}

.full-stars {
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
  overflow: hidden;
  color: #fde16d;
}

.empty-stars:before,
.full-stars:before {
  content: "\2605\2605\2605\2605\2605\2605\2605\2605\2605\2605";
  font-size: 15px;
}

.empty-stars:before {
  -webkit-text-stroke: 1px #848484;
}

.full-stars:before {
  -webkit-text-stroke: 1px $orange;
}
/* Webkit-text-stroke is not supported on firefox or IE */
/* Firefox */
@-moz-document url-prefix() {
  .full-stars {
    color: $orange;
  }
}

/* IE */
.full-stars {
  color: $orange;
}
</style>
