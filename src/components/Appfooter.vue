<template>
    <div class="footer-container">
      <!-- <router-link to="/">Home</router-link> -->
      <router-link class="footer__link footer-about" to="/about">About App</router-link>
      <p class="footer__author">Design&Code <a class="footer__link footer__link--author" href="#">Piotr Niezgoda</a></p>
    </div>
</template>

<script>
export default {
  name: 'Appfooter'
}
</script>

<style lang="scss" scoped>
  .footer-container {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 0 0 0 auto;
  }

  .footer__link {
    color: #fff;
    text-decoration: none;

    &--author {
      color: #E05165;

      &:hover {
        text-decoration: underline;
        color: #FCE56E;
      }
    }
  }

  .footer-about {
    transform: translateX(-50%);
  }

  .footer__author {
    color: #fff;
    font-size: 0.8rem;
  }
</style>
