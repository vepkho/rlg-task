<template>
  <div class="games-block">
    <Wrapper title="Most Popupar" buttonLabel="view all">
      <ul>
        <li v-for="item in gameItems" :key="item.title">
          <GameItem :title="item.title" :image="item.icon" />
        </li>
      </ul>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "../Wrapper/Wrapper.vue";
import GameItem from "./GameItem.vue";
export default {
  components: {
    GameItem,
    Wrapper,
  },
  data() {
    return {
      gameItems: [
        {
          icon: require("./assets/temple.png"),
          title: "Temple Tumble",
        },
        {
          icon: require("./assets/book.png"),
          title: "Book Of Dead",
        },
        {
          icon: require("./assets/anksu.png"),
          title: "Anksunamun",
        },
        {
          icon: require("./assets/fallen.png"),
          title: "Book Of Fallen",
        },
        {
          icon: require("./assets/dog.png"),
          title: "house Multihold",
        },
        {
          icon: require("./assets/athena.png"),
          title: "Athena's Glory",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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
