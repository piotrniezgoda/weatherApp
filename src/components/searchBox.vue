<template>
<div class="main-container">
  <h2 class="main-title">Check the weather in...</h2>
  <form class="searchForm" action="#">
    <input placeholder="City" class="searchForm__input" id="searchBox" type="text" required v-model="inputValue">
    <label class="searchForm__label" for="searchBox">City</label>
    <router-link v-bind:inputValue="inputValue" v-if="inputValue != ''" :to="{name: 'weather', params: {inputValue} }" class="searchForm__btn" type="submit" v-on:click="getherData"><img src="../assets/searchBtn.svg" alt="search button"></router-link>
  </form>
</div>
</template>

<script>
export default {
  name: 'searchBox',

  data() {
    return {
      inputValue: '',
    }
  },

  props: {

  },
  methods: {
    getherData(e) {
      e.preventDefault;

    },
  }

}
</script>

<style lang="scss">

  .main-container {
    margin: 19rem auto 0 auto;
    text-align: center;
  }

  .main-title {
    color: #fff;
    font-size: 1.68rem;
    color: #E05165;
    margin: 0 0 2rem 0;
  }

  .searchForm {
    position: relative;

    &__label {
      transition: opacity 250ms ease, top 250ms ease;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      color: #fff;
      font-size: 1.37rem;
    }

    &__input {
      border: 0;
      border-bottom: 1px solid #fff;
      z-index: 1;
      position: relative;
      background: transparent;
      text-align: center;
      font-size: 1.37rem;
      color: #fff;
      padding: 0 10px;

      &::placeholder {
        transition: opacity 250ms ease;
        opacity: 0.5;
        color: #fff;
        font-size: 1.37rem;
      }

      &:focus {
        outline: 0;

        &::placeholder {
          opacity: 0;
        }

        & + .searchForm__label {
          opacity: 1;
          top: 2rem;
        }
      }

      &:valid {
        outline: 0;

        &::placeholder {
          opacity: 0;
        }

        & + .searchForm__label {
          opacity: 1;
          top: 2rem;
        }
      }


    }

    .searchForm__btn {
      background: transparent;
      border: none;
      width: 1.4rem;
      height: 2rem;
      cursor: pointer;
      margin: 0 0 0 1.1rem;
      transition: 250ms ease;
      position: absolute;

      &:hover, &:focus {
        transform: scale(1.3);
        transition: 250ms ease;
      }

      >img {
        width: 1.4rem;
      }
    }
  }

</style>
