<template>
  <div class="providers">
    <ul>
      <img src="./assets/arrow.svg" alt="navigation arrow" class="arrow" />
      <li v-for="provider in providers">
        <img :src="provider.icon" alt="provider image" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      providers: [
        {
          icon: require("./assets/bgaming.png"),
        },
        {
          icon: require("./assets/amatic.png"),
        },
        {
          icon: require("./assets/evoplay.png"),
        },
        {
          icon: require("./assets/worth.png"),
        },
        {
          icon: require("./assets/spade.png"),
        },
        {
          icon: require("./assets/platipus.png"),
        },
        {
          icon: require("./assets/wm.png"),
        },
        {
          icon: require("./assets/gameart.png"),
        },
        {
          icon: require("./assets/pg.png"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.providers {
  .arrow {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }

  ul {
    position: relative;
    max-width: 1200px;
    margin: 56px auto;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    column-gap: 20px;
    list-style: none;
    border-top: 1px solid #232323;
    border-bottom: 1px solid #232323;
    padding: 32px 0 32px 32px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 108px;
      height: 66px;
      cursor: pointer;

      &:last-child {
        filter: opacity(0.8) brightness(0.2);
      }
    }
  }
}
</style>
