<template>
  <div class="home">
    <header class="home-header">
      <transition name="slide-fade">
        <homeHeader v-if="siteloaded"></homeHeader>
      </transition>
    </header>

    <main class="home-main">
      <transition name="fade">
        <searchBox v-if="siteloaded"></searchBox>
      </transition>
    </main>

    <footer class="home-footer">
      <Appfooter></Appfooter>
    </footer>

    <startBg></startBg>
  </div>
</template>

<script>
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
  data() {
    return {
      siteloaded: false,
    }
  },
  mounted() {
    this.siteloaded = true;
  }
};
</script>

<style lang="scss" scoped>
  .home {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
  }

  .home-header {
    padding: 18.75rem 0 0 0;

    @media(max-width: 500px) {
      padding: 9.75rem 0 0 0;
    }
  }

  .home-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem 4rem;
  }

  .slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
