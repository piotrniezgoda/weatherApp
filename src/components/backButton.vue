<template>
<div class="backBtn-container">
  <router-link class="backBtn" to="/">Back</router-link>
</div>

</template>

<script>
export default {
  name: 'backButton',
}
</script>

<style lang="scss" scoped>
  .backBtn {
    color: #fff;
    text-decoration: none;
    padding: 0.62rem 2.75rem;
    border-radius: 20px;
    border: 1px solid #fff;
    font-size: 1.1rem;
  }

  .backBtn-container {
    text-align: center;
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
