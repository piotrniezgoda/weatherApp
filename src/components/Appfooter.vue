<template>
    <div class="footer-container">
      <router-link class="footer__link footer-about" to="/about">About App</router-link>
      <p class="footer__author">Design&Code <a class="footer__link footer__link--author" href="https://piotrniezgoda.github.io/">Piotr Niezgoda</a></p>
    </div>
</template>

<script>
export default {
  name: 'Appfooter',
};
</script>

<style lang="scss" scoped>
  .footer-container {
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 0 0 0 auto;

    @media(max-width: 712px) {
      margin: 0;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .footer__link {
    color: #fff;
    text-decoration: none;

    @media(max-width: 712px) {
      margin: 0 0 1rem 0;
    }

    &:hover {
        text-decoration: underline;
        color: #FCE56E;
      }

    &--author {
      color: #E05165;

    }
  }

  .footer-about {
    transform: translateX(-50%);

    @media(max-width: 712px) {
      transform: none;
    }
  }

  .footer__author {
    color: #fff;
    font-size: 0.8rem;
  }
</style>
