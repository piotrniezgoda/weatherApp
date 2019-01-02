<template>
  <div class="about">
    <transition name="fade">
      <div v-if="siteloaded" class="about__container">
        <h1 class="about__title">About this App</h1>
        <div class="about__description-container">
          <p class="about__desc">Welcome in super cool weather App!</p>
          <p class="about__desc">This App was designed and coded by <a class="link" href="https://piotrniezgoda.github.io/">Piotr Niezgoda</a>, using great <a href="https://vuejs.org/" class="link">Vue.js</a> framework.</p>
          <p class="about__desc">I used the <a class="link" href="https://openweathermap.org/api">OpenWeatherMap API</a> to collect weather data from cities around the world.</p>
          <p class="about__desc">You may wonder, why this App is so cool, and better than many other Apps of this kind... The answer is simple - it is not.</p>
          <p class="about__desc">This project was created for better understanding Vue.js framework, and is intended for my use only (for portfolio).</p>
          <p class="about__desc">I never thought about beat popular weather Apps, but it's nice to have my own for myself :)</p>
          <p class="about__desc">PS. The start page background, and all icons were created be me.</p>
        </div>
      </div>
    </transition>

    <backBtn></backBtn>
  </div>
</template>


<script>
import backBtn from '@/components/backButton.vue';

export default {
  name: 'About',
  data() {
    return {
      siteloaded: false,
    };
  },
  components: {
    backBtn,
  },
  mounted() {
    this.siteloaded = true;
  },

};
</script>

<style lang="scss">
  .about {
    color: #fff;
    height: 100vh;
    background: linear-gradient(to bottom, #0f0c29 0%,#302b63 50%,#24243e 100%);
  }

  .about__container {
    max-width: 68.75rem;
    padding: 5rem 1rem 0 1rem;
    margin: 0 auto;
    height: 90%;
  }

  .about__title {
    text-align: center;
    font-size: 2rem;
    border-bottom: 1px solid #fff;
    padding: 0 0 1rem 0;
  }

  .link {
    text-decoration: none;
    color: #E05165;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #FCE56E;
      text-decoration: none;
    }
  }

  .about__desc {
    line-height: 1.3rem;

    &:first-child {
      margin: 0 0 1rem 0;
    }
  }

  .about__description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
