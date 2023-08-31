<template>
  <Header />
  <Banner />
  <GamesBlock />
  <Cards />
  <Predictions />
  <Providers />
  <Promotions />
  <LiveCasino />
</template>

<script>
import Header from "./Header/Header.vue";
import Banner from "./Banner/Banner.vue";
import GamesBlock from "./GamesBlock/GamesBlock.vue";
import Cards from "./Cards/Cards.vue";
import Predictions from "./Predictions/Predictions.vue";
import Providers from "./Providers/Providers.vue";
import Promotions from "./Promotions/Promotions.vue";
import LiveCasino from "./LiveCasino/LiveCasino.vue";

export default {
  components: {
    Header,
    Banner,
    GamesBlock,
    Cards,
    Predictions,
    Providers,
    Promotions,
    LiveCasino,
  },
};
</script>
