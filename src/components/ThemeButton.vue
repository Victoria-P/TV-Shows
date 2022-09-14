<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ThemeButton",
  setup() {
    const userTheme = ref<string>("dark-theme");

    onMounted(() => {
      const initUserTheme =
        localStorage.getItem("user-theme") || getMediaPreference();

      setTheme(initUserTheme);
    });

    const toggleTheme = () => {
      const activeTheme = localStorage.getItem("user-theme")!;

      setTheme(activeTheme === "dark-theme" ? "light-theme" : "dark-theme");
    };

    const setTheme = (theme: string) => {
      localStorage.setItem("user-theme", theme);
      userTheme.value = theme;
      document.documentElement.className = theme;
    };

    const getMediaPreference = () => {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    };
    return { userTheme, toggleTheme };
  },
});
</script>

<template>
  <input
    @change="toggleTheme"
    id="checkbox"
    type="checkbox"
    class="switch-checkbox"
  />
  <label for="checkbox" class="switch-label">
    <span>🌙</span>
    <span>☀️</span>
    <div
      class="switch-toggle"
      :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
    ></div>
  </label>
</template>

<style lang="scss" scoped>
.switch-checkbox {
  display: none;
}

.switch-label {
  background: var(--accent-color);
  width: 60px;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  transition: background 0.5s ease;
}

.switch-toggle {
  position: absolute;
  width: 25px;
  height: 25px;
  top: 5px;
  right: 0;
  left: 5px;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(25px);
}
</style>
