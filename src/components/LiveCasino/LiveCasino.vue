<template>
  <div class="live-casino">
    <Wrapper title="Live Casino">
      <ul>
        <li v-for="game in games">
          <img :src="game.icon" alt="game image" />
        </li>
      </ul>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "../Wrapper/Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
  data() {
    return {
      games: [
        {
          icon: require("./assets/coin-flip.png"),
        },
        {
          icon: require("./assets/black-jack.png"),
        },
        {
          icon: require("./assets/lightning.png"),
        },
        {
          icon: require("./assets/sic.png"),
        },
        {
          icon: require("./assets/roulette.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.live-casino {
  margin-top: 32px;
  ul {
    max-width: 1200px;
    margin: 56px auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    list-style: none;

    img {
      width: 100%;
      max-width: 232px;
      cursor: pointer;
    }
  }
}
</style>
