<template>
  <div class="container">
    <h2 class="title">404 Not Found</h2>
    <router-link to="/">
      <p>Go to main page</p>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 40vh;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 32px;

  .title {
    color: #fff;
    font-family: "Montserrat Variable", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    color: #fff;
    text-decoration: underline;
  }
}
</style>
