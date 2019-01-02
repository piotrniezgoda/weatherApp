<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line
import styles from '@/assets/css/reset.module.css';
export default {
  name: 'App',
  components: {
  },
};
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Sintony:400,700&subset=latin-ext');

  body, html {
    font-family: 'Sintony', sans-serif;
    @media (max-width: 543px) {
      font-size: 0.9rem;
    }
  }
</style>
