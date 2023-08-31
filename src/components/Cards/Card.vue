<template>
  <div class="card">
    <img src="./assets/dot.svg" alt="dot" class="dot top" />
    <img src="./assets/dot.svg" alt="dot" class="dot bottom" />
    <div class="content">
      <img :src="image" alt="image" class="card-image" />
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  max-width: 592px;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  border: 1px solid #282e3d;
  background: #16181d;

  @media screen and (max-width: 1024px) {
    max-width: 332px;
    height: 196px;
  }

  .dot {
    position: absolute;
  }
  .top {
    left: 45px;
    top: 40px;
  }

  .bottom {
    right: 40px;
    bottom: 40px;
  }

  .content {
    .card-image {
      position: absolute;
      top: 10%;
      left: 50%;
      transform: translate(-50%, -55%);

      @media screen and (max-width: 1024px) {
        transform: translate(-50%, -55%) scale(0.5);
      }
    }

    p {
      width: 100%;
      text-align: center;
      color: #fff;
      font-family: "Inter Variable", sans-serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      position: absolute;
      bottom: 32px;
      left: 50%;
      transform: translate(-50%, -50%);

      @media screen and (max-width: 1024px) {
        font-size: 24px;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 5px;
    border-radius: 3px 3px 0px 0px;
    background: #f29c1f;
  }
}
</style>
