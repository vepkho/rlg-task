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
  height: auto;
  min-height: 56px;
  display: flex;
  justify-content: center;
  padding: 16px 16px;
  width: 100%;
  background: #16181d;

  ul {
    width: 1200px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    flex-wrap: wrap;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      height: 24px;

      .image {
        width: 24px;
        height: 24px;
        background-color: #0f1010;
        border-radius: 4px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        color: #fff;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: -0.6px;
      }
    }
  }
}
</style>
