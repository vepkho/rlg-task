<template>
  <Banner />
  <GamesBlock />
  <Cards />
  <Predictions />
  <Providers />
  <Promotions />
  <LiveCasino />
  <ProvidersSlider />
  <Payment />
</template>

<script>
import Header from "../components/Header/Header.vue";
import Banner from "../components/Banner/Banner.vue";
import GamesBlock from "../components/GamesBlock/GamesBlock.vue";
import Cards from "../components/Cards/Cards.vue";
import Predictions from "../components/Predictions/Predictions.vue";
import Providers from "../components/Providers/Providers.vue";
import Promotions from "../components/Promotions/Promotions.vue";
import LiveCasino from "../components/LiveCasino/LiveCasino.vue";
import ProvidersSlider from "../components/ProvidersSlider/ProvidersSlider.vue";
import Payment from "../components/Payment/Payment.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Banner,
    GamesBlock,
    Cards,
    Predictions,
    Providers,
    Promotions,
    LiveCasino,
    ProvidersSlider,
    Payment,
    Footer,
  },
};
</script>
