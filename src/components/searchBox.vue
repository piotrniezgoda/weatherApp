<template>
<div class="main-container">
  <h2 class="main-title">Check the weather in...</h2>
  <div class="searchForm">
    <input placeholder="City" class="searchForm__input" id="searchBox" type="text" @keyup.enter="searchEnterTrigger" required v-model="inputValue">
    <label class="searchForm__label" for="searchBox">City</label>
    <transition>
      <router-link :to="{name: 'weather', params: {inputValue}}" v-if="inputValue != ''" class="searchForm__btn">
        <img src="../assets/searchBtn.svg" alt="search button">
      </router-link>
    </transition>

  </div>
</div>
</template>

<script>
export default {
  name: 'searchBox',

  data() {
    return {
      inputValue: '',
    };
  },

  props: {

  },
  methods: {
    searchEnterTrigger(e) {
      e.preventDefault();
      // eslint-disable-next-line
      const inputValue = this.inputValue;
      this.$router.push({ name: 'weather', params: { inputValue } });
    },
  },

};
</script>

<style lang="scss">

  .main-container {
    margin: 19rem auto 0 auto;
    text-align: center;

    @media(max-width: 460px) and (max-height:720px) {
      margin: 8rem auto 0 auto;
    }
  }

  .main-title {
    color: #fff;
    font-size: 1.68rem;
    color: #E05165;
    margin: 0 0 2rem 0;
  }

  .searchForm {
    position: relative;
    display: inline-block;

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
          left: -2rem;
        }
      }

      &:valid {
        outline: 0;

        &::placeholder {
          opacity: 0;
        }

        & + .searchForm__label {
          opacity: 1;
          left: -2rem;
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
