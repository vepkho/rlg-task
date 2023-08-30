<template>
  <div class="games-block">
    <Wrapper title="Most Popupar" buttonLabel="view all">
      <li v-for="item in gameItems" :key="item.title">
        <GameItem :title="item.title" :image="item.icon" />
      </li>
    </Wrapper>
  </div>
</template>

<script>
import Wrapper from "../Wrapper/Wrapper.vue";
import GameItem from "../GameItem/GameItem.vue";
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
          icon: require("./assets/temple.png"),
          title: "Book Of Dead",
        },
        {
          icon: require("./assets/temple.png"),
          title: "Anksunamun",
        },
        {
          icon: require("./assets/temple.png"),
          title: "Book Of Fallen",
        },
        {
          icon: require("./assets/temple.png"),
          title: "house Multihold",
        },
        {
          icon: require("./assets/temple.png"),
          title: "Athena's Glory",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
li {
  list-style: none;
}
</style>
