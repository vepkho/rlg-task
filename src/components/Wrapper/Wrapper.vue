<template>
  <div class="wrapper">
    <div class="header">
      <div class="title">
        {{ firstWord }} <span>{{ secondWord }}</span>
      </div>
      <div class="label" v-if="buttonLabel">{{ buttonLabel }}</div>
    </div>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    buttonLabel: String,
  },
  computed: {
    firstWord() {
      if (this.title) {
        const words = this.title.split(" ");
        return words[0] || "";
      }
      return "";
    },
    secondWord() {
      if (this.title) {
        const words = this.title.split(" ");
        return words[1] || "";
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 44px 16px 16px 16px;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    .title {
      position: relative;
      padding: 17px 45px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 20px;
      border: 1px solid #151d24;
      font-family: "Inter Variable", sans-serif;
      color: #fff;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: -0.96px;
      text-transform: capitalize;
      background-color: #151d24;

      @media screen and (max-width: 768px) {
        padding: 12px 24px;
        font-size: 18px;
      }

      &::before {
        content: "";
        position: absolute;
        top: 10px;
        left: -2px;
        width: 3px;
        height: 36px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #f29c1f;

        @media screen and (max-width: 768px) {
          top: 7.2px;
          height: 32px;
        }
      }

      span {
        color: #fff;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.96px;
        text-transform: capitalize;

        @media screen and (max-width: 768px) {
          font-size: 18px;
        }
      }
    }

    .label {
      display: inline-flex;
      padding: 12px 28px;
      align-items: flex-start;
      gap: 10px;
      border-radius: 20px;
      background: #12151d;
      color: #fff;
      font-family: "Montserrat Variable", sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      cursor: pointer;
      @media screen and (max-width: 768px) {
        padding: 8px 16px;
        font-size: 15px;
      }
    }
  }
}
</style>
