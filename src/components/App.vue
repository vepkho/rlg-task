<template>
  <Header />
  <Banner />
  <GamesBlock />
</template>

<script>
import Header from "./Header/Header.vue";
import Banner from "./Banner/Banner.vue";
import GamesBlock from "./GamesBlock/GamesBlock.vue";

export default {
  components: {
    Header,
    Banner,
    GamesBlock,
  },
};
</script>
