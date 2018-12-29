<template>
  <div class="container">
    <div class="content-wrapper">
      <div class="basicInfo">
        <h1 v-if="step === 2" class="basicInfo__cityName">{{ APIresoult.name }} <span class="basicInfo__city-country">{{ APIresoult.sys.country }}</span></h1>
        <p v-if="step === 2" class="basicInfo__city-temperature">{{ TemptoCelcious() }}&deg;C</p>
      </div>
      <div class="statusInfo">
        <p class="statusInfo__status statusInfo__status--title">Current Weather</p>
        <p id="js-time" class="statusInfo__status statusInfo__status--time">{{ time }}<!-- use dt for timezone --></p>
      </div>
      <weatherInfoGrid v-bind:resoult="APIresoult" v-if="step === 2"></weatherInfoGrid>
    </div>

    <backBtn></backBtn>
  </div>
</template>

<script>
import axios from 'axios';
import backBtn from '@/components/backButton';
import weatherInfoGrid from '@/components/weatherInfoGrid';
const API = 'api.openweathermap.org/data/2.5/weather';
const APIkey = '145367447ab3057720ebbc55b322f573';
const moment = require('moment');

export default {
  name: 'SearchResoult',
  props: ['inputValue'],
  data() {
    return {
      time: '',
      APIresoult: [],
      step: 1,
    }
  },
  methods: {
    showTime() {
        const self = this;
        this.time = moment().format("h:m A");
        setTimeout(self.showTime, 1000)
    },
    TemptoCelcious() {
      const kalvinTemp = this.APIresoult.main.temp;
      const zeroKelvin = -273.15;
      const celciousTemp = kalvinTemp - (-zeroKelvin);
      return celciousTemp.toFixed(0);
    }
    },
    mounted: function () {
      this.showTime();
    },
    components: {
      backBtn,
      weatherInfoGrid,
    },
    created() {
        axios.get(`https://${API}?q=${this.inputValue}&APPID=${APIkey}`)
      .then((response) => {
        this.APIresoult = response.data;
        console.log(this.APIresoult);
        this.step = 2;
      })
      .catch((error) => {
        this.$router.push('nothingFound');
      })
    },
  }

</script>

<style lang="scss" scoped>
  .container {
    background: linear-gradient(to bottom, #0f0c29 0%,#302b63 50%,#24243e 100%);
    color: #fff;
    padding: 2.8rem 0 5rem 0;
    height: 100vh;
    position: relative;
  }

  .basicInfo__cityName {
    font-size: 3.75rem;
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
  }

  .basicInfo__city-country {
    font-size: 1.5rem;
  }

  .basicInfo__city-temperature {
    text-align: center;
    margin: 1.1rem 0 0 0;
    font-size: 2.9rem;
  }

  .content-wrapper {
    max-width: 66.625rem;
    margin: 0 auto;
  }

  .basicInfo {
    border-bottom: 1px solid #fff;
    padding: 0 0 2.18rem 0;
  }

  .statusInfo {
    padding: 2.18rem 0 3.37rem 0;
  }

  .statusInfo__status {
    font-size: 1.25rem;
    text-align: center;

    &--title {
      color: #77C2C7;
      font-weight: 700;
    }

    &--time {
      margin: 0.8rem 0 0 0;
    }
  }
</style>
