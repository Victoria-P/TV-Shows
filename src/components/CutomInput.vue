<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CutomInput",
  props: {
    inputValue: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="input-wrapper">
    <input
      type="text"
      name="input"
      class="custom-input"
      :placeholder="placeholder"
      :value="inputValue"
      @input="(e) => $emit('handle-input', e)"
    />
    <button
      class="close-icon"
      :class="{ hidden: !inputValue.length }"
      @click="$emit('handle-reset')"
    ></button>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  width: 40%;
}

.custom-input,
.close-icon {
  position: relative;
  padding: 10px;
}
.close-icon {
  border: 1px solid transparent;
  background-color: transparent;
  display: inline-block;
  vertical-align: middle;
  outline: 0;
  position: absolute;
  top: 10px;
  transition: all 0.3s;
  opacity: 1;
  cursor: pointer;

  &.hidden {
    opacity: 0;
  }
}
.close-icon:after {
  content: "X";
  display: block;
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: #979090;
  z-index: 1;
  right: 35px;
  top: 0;
  bottom: 0;
  padding: 5px;
  border-radius: 50%;
  text-align: center;
  color: white;
  font-size: 10px;
  cursor: pointer;
}
.custom-input:not(:valid) ~ .close-icon {
  display: none;
}

@media (max-width: $medium-width) {
  .input-wrapper {
    width: 80%;
    margin: 0 auto;
  }
}
</style>
