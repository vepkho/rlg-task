<template>
  <Wrapper title="Casino Games" buttonLabel="view all">
    <ul>
      <li v-for="game in games" :key="game.id" class="game">
        <GameItem :title="game.category" :image="game.image" />
      </li>
    </ul>
  </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper/Wrapper.vue";
import GameItem from "../GamesBlock/GameItem.vue";
export default {
  components: {
    GameItem,
    Wrapper,
  },
  computed: {
    games() {
      return this.$store.state.games;
    },
  },
  methods: {
    async loadGames() {
      try {
        await this.$store.dispatch("fetchGames");
      } catch (error) {
        console.error("Error loading Games:", error);
      }
    },
  },
  mounted() {
    this.loadGames();
  },
};
</script>

<style scoped>
ul {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  li {
    list-style: none;
    align-self: center;
    justify-self: center;
  }
}
</style>
