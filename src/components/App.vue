<template>
  <Header />
  <Banner />
  <GamesBlock />
  <Cards />
  <Predictions />
</template>

<script>
import Header from "./Header/Header.vue";
import Banner from "./Banner/Banner.vue";
import GamesBlock from "./GamesBlock/GamesBlock.vue";
import Cards from "./Cards/Cards.vue";
import Predictions from "./Predictions/Predictions.vue";

export default {
  components: {
    Header,
    Banner,
    GamesBlock,
    Cards,
    Predictions,
  },
};
</script>
