<template>
  <div class="navbar">
    <ul>
      <li v-for="item in navItems" :key="item.title">
        <div class="image">
          <img :src="item.icon" :alt="item.title" />
        </div>
        <p>{{ item.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          icon: require("./assets/navbar/home.svg"),
          title: "Home",
        },
        {
          icon: require("./assets/navbar/sport.svg"),
          title: "Sport",
        },
        {
          icon: require("./assets/navbar/live.svg"),
          title: "Live Sport",
        },
        {
          icon: require("./assets/navbar/casino.svg"),
          title: "Casino",
        },
        {
          icon: require("./assets/navbar/live-casino.svg"),
          title: "Live Casino",
        },
        {
          icon: require("./assets/navbar/virtual.svg"),
          title: "Virtual",
        },
        {
          icon: require("./assets/navbar/games.svg"),
          title: "games",
        },
        {
          icon: require("./assets/navbar/bingo.svg"),
          title: "Bingo",
        },
        {
          icon: require("./assets/navbar/beton.svg"),
          title: "Beton",
        },
        {
          icon: require("./assets/navbar/e-sports.svg"),
          title: "Virtual",
        },
        {
          icon: require("./assets/navbar/poker.svg"),
          title: "Poker",
        },
        {
          icon: require("./assets/navbar/promotions.svg"),
          title: "Promotions",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: none;
  position: absolute;
  top: 75px;
  z-index: 9;
  height: 100%;
  padding: 16px 16px;
  width: 100%;
  background: #16181d;
  overflow: auto;

  @media screen and (max-width: 1024px) {
    display: block;
  }

  ul {
    list-style: none;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 16px;

    @media screen and (max-width: 468px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(6, 1fr);
    }

    li {
      height: 24px;
      cursor: pointer;
      width: calc(100% - 16px);
      height: 120px;
      margin: 0 0 10px 0;
      box-shadow: inset 0 1px 0 0 #3b3d44;
      border-radius: 6px;
      transition: 0.3s all;
      background: #27292e;
      justify-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
      padding: 12px;

      @media screen and (max-width: 468px) {
        width: 100%;
        height: 100%;
        gap: 16px;
      }

      .image {
        width: 64px;
        height: 64px;
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 48px;
          height: 48px;
        }
      }

      p {
        color: #fff;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: -0.6px;
      }
    }
  }
}
</style>
