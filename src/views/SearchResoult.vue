<template>
  <div class="container">
    <div class="content-wrapper">
      <transition name="fade">
        <div v-if="isloaded" class="basicInfo">
          <h1 class="basicInfo__cityName">
            {{ APIresoult.name }} <span class="basicInfo__city-country">
             {{ APIresoult.sys.country }}</span>
          </h1>
          <p class="basicInfo__city-temperature">{{ TemptoCelcious() }}&deg;C</p>
        </div>
      </transition>
      <transition name="slide-fade">
        <div v-if="isloaded" class="statusInfo">
          <p class="statusInfo__status statusInfo__status--title">Last weather update</p>
          <p id="js-time" class="statusInfo__status statusInfo__status--time">
          {{ lastUpdateTime() }}
          </p>
        </div>
      </transition>
      <transition name="slide-fade">
        <weatherInfoGrid v-bind:resoult="APIresoult" v-if="isloaded"></weatherInfoGrid>
      </transition>
    </div>
    <div class="lds-roller" v-if="loading">
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
    <backBtn></backBtn>
  </div>
</template>

<script>
import axios from 'axios';
import backBtn from '@/components/backButton.vue';
import weatherInfoGrid from '@/components/weatherInfoGrid.vue';

const API = 'api.openweathermap.org/data/2.5/weather';
const APIkey = '145367447ab3057720ebbc55b322f573';
const moment = require('moment');

export default {
  name: 'SearchResoult',
  props: ['inputValue'],
  data() {
    return {
      APIresoult: [],
      loading: false,
      isloaded: false,
    };
  },
  methods: {
    TemptoCelcious() {
      const kalvinTemp = this.APIresoult.main.temp;
      const zeroKelvin = -273.15;
      const celciousTemp = kalvinTemp - (-zeroKelvin);
      return celciousTemp.toFixed(0);
    },
    lastUpdateTime() {
      const unixTime = this.APIresoult.dt;
      const lastUpdate = moment.unix(unixTime);
      return lastUpdate.format('h:mm A');
    },
  },
  components: {
    backBtn,
    weatherInfoGrid,
  },
  created() {
    this.loading = true;
    this.isloaded = false;
    axios.get(`https://${API}?q=${this.inputValue}&APPID=${APIkey}`)
      .then((response) => {
        this.APIresoult = response.data;
        this.loading = false;
        this.isloaded = true;
      })
      .catch(() => {
        this.$router.push('nothingFound');
      });
  },
};

</script>

<style lang="scss" scoped>
  .container {
    background: linear-gradient(to bottom, #0f0c29 0%,#302b63 50%,#24243e 100%);
    color: #fff;
    padding: 2.8rem 1rem 5rem 1rem;
    min-height: 100vh;
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
    overflow: hidden;
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

  .slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(250px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


  .lds-roller {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% -50%);
  width: 64px;
  height: 64px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  margin: -3px 0 0 -3px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 50px;
  left: 50px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 54px;
  left: 45px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 57px;
  left: 39px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 58px;
  left: 32px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 57px;
  left: 25px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 54px;
  left: 19px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 50px;
  left: 14px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 45px;
  left: 10px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
