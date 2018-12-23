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
    width: 34.75rem;
    margin: 0 auto;
  }

  .home__title {
    font-size: 2.5rem;
    color: #fff;
    text-align: right;
    line-height: 4rem;
  }

  .yellowText {
    color: #FCE56E;
  }

  .home__sub {
    font-family: 'Indie Flower';
    font-size: 2.12rem;
    color: #fff;
    text-align: right;
  }
</style>
