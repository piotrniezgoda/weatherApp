<template>
  <div class="home">
    <header class="home-header">
      <homeHeader></homeHeader>
    </header>
    <main class="home-main">
      <searchBox></searchBox>
    </main>

    <footer class="home-footer">
      <Appfooter></Appfooter>
    </footer>

    <startBg></startBg>
  </div>
</template>

<script>
// @ is an alias to /src
import startBg from '@/components/startBg.vue';
import Appfooter from '@/components/Appfooter';
import homeHeader from '@/components/homeHeader';
import searchBox from '@/components/searchBox';

export default {
  name: 'home',
  components: {
    startBg,
    Appfooter,
    homeHeader,
    searchBox,
  },
};
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;
    position: relative;
  }

  .home-header {
    padding: 18.75rem 0 0 0;
  }

  .home-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 4rem;
  }
</style>
