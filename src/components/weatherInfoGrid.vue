<template>
  <div class="resoult-grid">
    <div class="resoult-box resoult--temperature">
      <div class="resoult-box-iconwrapper">
        <img v-bind:src="require('../assets/' + resoult.weather[0].icon + '.svg')" alt="weather icon">
        <p class="resoult-box-info resoult-box-info--weather"> {{ resoult.weather[0].description }}</p>
      </div>

      <div class="temp-group">
        <p class="resoult-box-info tempCel">{{ TemptoCelcious() }}&deg;C</p>
        <p class="resoult-box-info tempCal">{{ resoult.main.temp }} K</p>
      </div>
    </div>
    <div class="resoult-box resoult--pressure">
      <h2 class="resoult-box-title">Pressure</h2>
      <p class="resoult-box-info">{{ resoult.main.pressure }} hPa</p>
    </div>
    <div class="resoult-box resoult--humidity">
      <h2 class="resoult-box-title">Humidity</h2>
      <p class="resoult-box-info">{{ resoult.main.humidity }}%</p>
    </div>
    <div class="resoult-box resoult--wind">
      <h2 class="resoult-box-title">Wind</h2>
      <p class="resoult-box-info">{{ resoult.wind.speed }} m/s</p>
    </div>
    <div class="resoult-box resoult--cloudiness">
      <h2 class="resoult-box-title">Cloudiness</h2>
      <p class="resoult-box-info">{{ resoult.clouds.all }} %</p>
    </div>
    <div class="resoult-box resoult--visibility">
      <h2 class="resoult-box-title">Visibility</h2>
      <p class="resoult-box-info">{{ calculateKm() }} km</p>
    </div>
    <div class="resoult-box resoult--sr-ss">
      <h2 class="resoult-box-title">Sunrise/Sunset</h2>
      <div class="group-info">
        <p class="resoult-box-info group-info--margin">{{ sunriseCalc() }}</p>
        <p class="resoult-box-info">{{ sunsetCalc() }}</p>
      </div>
    </div>
    <div class="resoult-box resoult-citycoord">
      <h2 class="resoult-box-title">City Coordinates</h2>
      <div class="group-info">
        <p class="resoult-box-info group-info--margin">Longitude: {{ resoult.coord.lon }}</p>
        <p class="resoult-box-info">Latitude: {{ resoult.coord.lat }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'weatherInfoGrid',
  props: ['resoult'],
  data() {
    return {

    }
  },
  methods: {
    TemptoCelcious() {
      const kalvinTemp = this.resoult.main.temp;
      const zeroKelvin = -273.15;
      const celciousTemp = kalvinTemp - (-zeroKelvin);
      return celciousTemp.toFixed(0);
    },
    calculateKm() {
      const meters = this.resoult.visibility;
      const kilometers = meters / 1000;
      return kilometers.toFixed(0);
    },
    sunriseCalc() {
      const date = new Date(this.resoult.sys.sunrise * 1000);
      return `Sunrise: ${date.getHours()}:${date.getMinutes()}`
    },
    sunsetCalc() {
      const date = new Date(this.resoult.sys.sunset * 1000);
      return `Sunset: ${date.getHours()}:${date.getMinutes()}`
    },
  }
}
</script>

<style lang="scss" scoped>
  .resoult-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
  .resoult--temperature {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .resoult-box-info {
    text-align: center;

    &--weather {
      margin-top: 1rem;
    }
  }

  .resoult-box {
    background: rgba(255,255,255,0.1);
    border-radius: 20px;
    padding: 1.2rem 5rem 1.2rem 5rem;

    &-title {
      color: #77C2C7;
      text-align: center;
      font-size: 1.25rem;
      margin-bottom: 1.56rem;
    }
  }

  .temp-group {
    margin-top: 3.5rem;
  }

  .tempCel {
    margin-bottom: 0.5rem;
  }

  .group-info--margin {
    margin: 0.4rem;
  }
</style>
