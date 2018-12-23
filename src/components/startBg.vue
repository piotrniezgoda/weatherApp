<template>
  <div class="startBackground"></div>
</template>

<script>
export default {
  name: 'startBg',
};
</script>

<style scoped lang="scss">
.startBackground {
  background: url('../assets/startBackground.svg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  position: fixed;
  background-position: 0 0%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}
</style>
