<template>
  <div class="providers">
    <Wrapper title="Top Providers">
      <ul>
        <li v-for="provider in providers">
          <img :src="provider.icon" alt="provider image" />
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
      providers: [
        {
          icon: require("./assets/pragmatic.png"),
        },
        {
          icon: require("./assets/evo.png"),
        },
        {
          icon: require("./assets/playtech.png"),
        },
        {
          icon: require("./assets/netent.png"),
        },
        {
          icon: require("./assets/betsoft.png"),
        },
        {
          icon: require("./assets/nolimit.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  max-width: 1200px;
  margin: 56px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 20px;
  list-style: none;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 184px;
    height: 88px;
    border-radius: 20px;
    background: #16181d;
    cursor: pointer;
  }
}
</style>
