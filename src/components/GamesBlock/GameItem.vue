<template>
  <div class="game-item">
    <img :src="image" alt="game item" class="banner" />
    <div class="overlay">
      <p class="title">{{ title }}</p>
      <img src="../../assets/play-button.svg" alt="play button" />
      <div class="actions">
        <p>Play</p>
        <img src="../../assets/star.svg" alt="favorite icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
.game-item {
  width: 191.6px;
  height: 278px;
  margin-top: 24px;
  position: relative;
  border-radius: 20px;
  border: 1px solid #515151;
  box-shadow: 0px 114px 86px -48px rgba(242, 156, 31, 0.39);
  cursor: pointer;

  &::before {
    content: "";
    border-radius: 20px;
    background: linear-gradient(
      180deg,
      rgba(2, 6, 11, 0.97) 0%,
      rgba(0, 0, 0, 0.97) 50%,
      rgba(11, 17, 24, 0.97) 92.71%
    );
    position: absolute;
    left: -0;
    bottom: 2px;
    width: 191px;
    height: 0;
    z-index: -1;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
  }

  &:hover::before {
    bottom: 0;
    height: 100%;
    z-index: 1;
    box-shadow: 0px 114px 86px -48px rgba(242, 156, 31, 0.7);
  }

  .banner {
    border-radius: 20px;
    width: 191.6px;
    height: 278px;
  }

  .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    transition: all 0.3s ease;

    .title {
      margin-bottom: 36px;
      text-align: center;
      color: #fff;
      font-family: "Montserrat Variable", sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 13px;
      margin-top: 36px;

      p {
        color: #f29c1f;
        font-family: "Montserrat Variable", sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }

  &:hover > .overlay {
    opacity: 1;
    overflow: visible;
  }
}
</style>
