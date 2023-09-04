<template>
  <div class="payment">
    <div class="images">
      <img src="./assets/papara.png" alt="payment method" />
      <img src="./assets/cepbank.png" alt="payment method" />
      <img src="./assets/minipay.png" alt="payment method" />
      <img src="./assets/payfix.png" alt="payment method" />
      <img src="./assets/envo.png" alt="payment method" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.payment {
  padding: 0 16px 128px 16px;
  .images {
    max-width: 610px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    padding-top: 24px;

    img {
      width: 100%;
      max-width: 108px;
      height: 36px;
      cursor: pointer;
    }

    @media screen and (max-width: 568px) {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 20px;
    }
  }
}
</style>
