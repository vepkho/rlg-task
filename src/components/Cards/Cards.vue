<template>
  <div class="cards">
    <ul>
      <li v-for="card in cardItems" :key="card.title">
        <card :title="card.title" :image="card.icon" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      cardItems: [
        {
          icon: require("./assets/sport.png"),
          title: "Sport",
        },
        {
          icon: require("./assets/live-sport.png"),
          title: "Live Sport",
        },
        {
          icon: require("./assets/casino.png"),
          title: "Casino",
        },
        {
          icon: require("./assets/live-casino.png"),
          title: "Live Casino",
        },
        {
          icon: require("./assets/sport.png"),
          title: "Virtual Sport",
        },
        {
          icon: require("./assets/promotions.png"),
          title: "Promotions",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.cards {
  padding: 0 16px;
  ul {
    max-width: 1200px;
    margin: 182px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 140px;
    column-gap: 14px;
  }
}
</style>
