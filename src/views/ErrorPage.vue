<template>
  <div class="error-container">
    <transition name="fade">
      <div v-if="siteloaded" class="content-container">
        <h1 class="error-title">Sorry, we did not find this city</h1>
        <div class="error-icon">
          <img src="../assets/error-icon.svg" alt="error icon">
        </div>
        <p class="error-text-info">Please check if You have entered city name correctly</p>
        <p class="error-text-info">if the city name is correct, then probably this city doesn't exist in our database</p>
        <p class="error-text-info">You can check out another city in your area</p>
      </div>
    </transition>
    <backBtn></backBtn>
  </div>
</template>

<script>
import backBtn from '@/components/backButton.vue';

export default {
  name: 'ErrorPage',
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

<style lang="scss" scoped>

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.error-icon {
  width: 10rem;
  height: auto;
  margin: 3.75rem 0;
}
  .error-container {
   background: linear-gradient(to bottom, #0f0c29 0%,#302b63 50%,#24243e 100%);
    height: 100vh;
  }

  .error-title {
    color: #fff;
    font-size: 1.87rem;
    text-align: center;
  }

  .error-text-info {
    color: #fff;
    margin: 0.5rem 0;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
