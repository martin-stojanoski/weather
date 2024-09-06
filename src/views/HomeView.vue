<template>
  <div class="main-container" ref="mainContainer">
    <SearchBar
      @reset="clearSearchResults"
      @search="executeSearch"
    ></SearchBar>
    <div v-if="weatherData != null" class="weather-data-container">
      <div class="weather-data">
        <h2>{{ city }}</h2>
        <p>Trenutna temperatura: <strong>{{ weatherData.temp }}°C</strong> (Občutek: <strong>{{ weatherData.feels_like }}°C</strong>)</p>
        <p>Varira med <strong>{{ weatherData.temp_min }}°C</strong> in <strong>{{ weatherData.temp_max }}°C</strong></p>
        <p>Vlažnost: <strong>{{ weatherData.humidity }}%</strong></p>
      </div>
    </div>
  </div>
  <ToastMessage
    @opened="blurBackground"
    @closed="closedToast"
  ></ToastMessage>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 1rem;
  transition: all 0.3s;
}

.weather-data-container {
  background-color: #ffffff;
  border-radius: 5px;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>

<script>
import SearchBar from '@/components/SearchBar.vue'
import ToastMessage from '@/components/Toast.vue'

export default {
  name: 'HomeView',
  components: {
    SearchBar,
    ToastMessage
  },
  data() {
    return {
      searchResults: [],
      options: ['Ljubljana', 'Kranj', 'Sežana'],
      showToast: false,
      toastMessage: ''
    }
  },
  methods: {
    executeSearch(searchString) {
      this.$store.dispatch('getWeatherData', searchString)
    },
    clearSearchResults() {
      this.$store.dispatch('clearWeatherData')
    },
    blurBackground() {
      this.$refs.mainContainer.style.filter = 'blur(5px)'
    },
    closedToast() {
      this.$refs.mainContainer.style.filter = 'none'
      this.clearSearchResults()
    }
  },
  computed: {
    city() {
      return this.$store.state.city
    },
    weatherData() {
      return this.$store.state.weatherData
    },
  }
}
</script>
