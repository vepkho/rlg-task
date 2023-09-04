<template>
  <div class="promotions">
    <div class="images">
      <img src="./assets/bonus-300.png" alt="bonus-300" />
      <img src="./assets/free-spins.png" alt="bonus-300" />
      <img src="./assets/bonus-88.png" alt="bonus-300" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.promotions {
  padding: 0 16px;
  .images {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    padding-top: 24px;

    img {
      width: 100%;
      max-width: 386.6px;
      min-width: 220px;
      cursor: pointer;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 20px;

      img {
        max-width: 100%;
      }
    }
  }
}
</style>
