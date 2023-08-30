<template>
  <div class="header">
    <TopSection />
    <Navbar />
  </div>
</template>

<script>
import TopSection from "./TopSection.vue";
import Navbar from "./Navbar.vue";

export default {
  components: {
    TopSection,
    Navbar,
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 0;
}
</style>
