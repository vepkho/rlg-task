<template>
  <div class="dropdown">
    <div class="selected-option" @click="toggleDropdown">
      <img src="./assets/language.png" alt="english" v-if="flag == 'en'" />
      <img src="./assets/turkey.png" alt="english" v-if="flag == 'tr'" />
    </div>
    <div class="options" v-show="isOpen">
      <div
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="option"
      >
        <img
          :src="option.image"
          :alt="option.value"
          v-if="option.value != flag"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      flag: localStorage.getItem("lang") || "en",
      options: [
        {
          value: "en",
          image: require("./assets/language.png"),
        },
        {
          value: "tr",
          image: require("./assets/turkey.png"),
        },
      ],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.isOpen = false;
      localStorage.setItem("lang", option.value) || "en";
      window.location.reload();
    },
  },
};
</script>

<style scoped>
.dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;

  .options {
    position: absolute;
    top: 34px;
    z-index: 9;
  }
}
img {
  width: 28px;
  height: 28px;
  border-radius: 20px;
}
</style>
