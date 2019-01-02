<template>
<header class="home-header-container">
  <h1 class="home__title">Check the <span class="yellowText">weather</span> in your city</h1>
  <p class="home__sub">... or somewhere else</p>
</header>

</template>

<script>
export default {
 name: 'homeHeader',
}
</script>

<style lang="scss" scoped>
  .home-header-container {
    max-width: 37.75rem;
    margin: 0 auto;

    @media(max-width: 860px) {
      margin: 0
    }

    @media(max-width: 668px) {
      padding: 0 1rem;
    }
  }

  .home__title {
    font-size: 2.5rem;
    color: #fff;
    text-align: right;
    line-height: 4rem;
    @media(max-width: 860px) {
      font-size: 2rem
    }

    @media(max-width: 508px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }

  .yellowText {
    color: #FCE56E;
  }

  .home__sub {
    font-family: 'Dancing Script', cursive;
    font-size: 2.12rem;
    color: #fff;
    text-align: right;

    @media(max-width: 508px) {
      text-align: center;
    }
  }
</style>

