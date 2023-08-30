<template>
  <div class="banner">
    <p class="title">
      GET THE BONUS ON THE FIRST DEPOSIT UP TO
      <span class="highlight">500 %</span> AND
      <span class="highlight">25 FS</span>
    </p>
    <img
      src="../../assets/banner-btn.svg"
      alt="banner-btn"
      class="banner-btn"
    />
    <img
      src="../../assets/banner.png"
      alt="banner-image"
      class="banner-image"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  max-width: 1200px;
  width: 100%;
  height: 387px;
  margin: 0 auto;
  border-radius: 20px;
  background-image: url("../../assets/fade.svg");

  .title {
    position: absolute;
    left: 50px;
    top: 72px;
    width: 456px;
    color: #fff;
    font-family: "Montserrat Variable", sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 127.9%;
    letter-spacing: 1.6px;
    text-transform: capitalize;

    .highlight {
      color: #f29c1f;
    }
  }

  .banner-btn {
    position: absolute;
    bottom: 38px;
    left: 22px;
  }

  .banner-image {
    position: absolute;
    right: 0;
    z-index: -1;
    border-radius: 20px;
  }

  &::before {
    content: "";
    width: 475px;
    height: 4px;
    border-radius: 20px 20px 0px 0px;
    background: #f29c1f;
    position: absolute;
    bottom: 0;
    left: 18px;
    z-index: 3;
  }
}
</style>
