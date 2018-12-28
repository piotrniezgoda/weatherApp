<template>
  <div class="about">
    <h1>This is an about page</h1>
    <backBtn></backBtn>
  </div>
</template>


<script>
import backBtn from '@/components/backButton';
export default {
  name: 'About',
  components: {
    backBtn,
  }

}
</script>

<style lang="scss">
  .about {
    color: #fff;
    height: 100vh;
    background: linear-gradient(to bottom, #0f0c29 0%,#302b63 50%,#24243e 100%);
  }

</style>

