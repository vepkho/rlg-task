<template>
  <div class="container">
    <div class="top-section">
      <div class="left">
        <button class="menu" @click="toggleVisibility">
          <img
            src="./assets/topSection/menu.png"
            alt="menu icon"
            v-if="!this.$store.state.isMenuVisible"
          />
          <img
            src="./assets/topSection/exit.png"
            alt="menu icon"
            v-if="this.$store.state.isMenuVisible"
          />
        </button>
        <router-link to="/">
          <img src="./assets/topSection/logo.svg" alt="logo" class="logo" />
        </router-link>
        <router-link to="/">
          <img
            src="./assets/topSection/logo-sm.png"
            alt="logo"
            class="logo-sm"
          />
        </router-link>
      </div>
      <div class="right">
        <div class="details">
          <div class="time">
            {{ currentTime }}
          </div>
          <div class="options">
            <img src="./assets/topSection/call.svg" alt="contact image" />
            <img src="./assets/topSection/split.svg" alt="split" />
            <img src="./assets/topSection/monitor.svg" alt="monitor" />
            <img src="./assets/topSection/sun.svg" alt="sun" />
          </div>
        </div>
        <div class="guest">
          <button class="btn-transparent">Login</button>
          <button class="btn-full">Sign Up</button>
        </div>
        <Dropdown />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Dropdown from "../Dropdown/Dropdown.vue";
export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      currentTime: "",
      isVisible: false,
    };
  },
  computed: {
    ...mapState(["isMenuVisible"]),
  },
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      this.currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
    toggleVisibility() {
      this.$store.dispatch("toggleVisibility");
    },
  },
  watch: {
    isVisible(newVal) {
      if (newVal === true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  beforeUnmount() {
    document.body.style.overflow = "";
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 16px;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    .left {
      display: flex;
      align-items: center;
      gap: 16px;
      .menu {
        display: none;
        width: 32px;
        height: 32px;
        background: #26292e;
        box-shadow: inset 0 1px 0 0 #34373a;
        border-radius: 6px;
        border: none;
        cursor: pointer;

        img {
          width: 24px;
          height: 24px;
        }
        @media screen and (max-width: 1024px) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .logo {
        cursor: pointer;
        @media screen and (max-width: 576px) {
          display: none;
        }
      }

      .logo-sm {
        display: none;
        @media screen and (max-width: 576px) {
          display: block;
        }
      }
    }

    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 520px;

      @media screen and (max-width: 1024px) {
        max-width: 240px;
      }

      .details {
        display: flex;
        align-items: center;
        gap: 16px;

        @media screen and (max-width: 1024px) {
          display: none;
        }

        .time {
          color: #8d8d8d;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.48px;
        }

        .options {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;

          width: 160px;
          height: 28px;
          background: #16181d;
          border-radius: 14px;

          img {
            width: 18px;
            height: 14px;
            background: none;
            cursor: pointer;
          }
        }
      }
      .guest {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        button {
          width: 89px;
          height: 28px;
          border-radius: 40px;
          border: 0;
          color: white;
          cursor: pointer;
        }

        .btn-transparent {
          color: #fff;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          background-color: transparent;
        }

        .btn-full {
          background-color: #33d173;
          color: #17191d;
          font-family: "Montserrat Variable", sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          text-transform: uppercase;
        }
      }

      .language {
        width: 28px;
        height: 28px;
        border-radius: 20px;
        background: #16181d;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        appearance: none;
      }
    }
  }
}
</style>
