<template>
  <div class="header">
    <TopSection @menuToggle="handleMenuToggle" />
    <Navbar />
    <NavbarMobile v-if="isVisible" />
  </div>
</template>

<script>
import TopSection from "./TopSection.vue";
import Navbar from "./Navbar.vue";
import NavbarMobile from "./NavbarMobile.vue";

export default {
  data() {
    return {
      isVisible: false,
    };
  },
  components: {
    TopSection,
    Navbar,
    NavbarMobile,
  },
  methods: {
    handleMenuToggle(data) {
      this.isVisible = data;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
  margin: 0 auto;
}
</style>
