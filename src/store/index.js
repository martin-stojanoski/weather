import { createStore } from 'vuex'
import getWeatherIn from '@/api/weatherApi'

export default createStore({
  state: {
    city: '',
    weatherData: null,
    errorMessage: '',
    searchHistory: []
  },
  getters: {
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
    },
    setWeatherData(state, data) {
      state.weatherData = data;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    addToSearchHistory(state, city) {
      state.searchHistory = [city, ...state.searchHistory.filter(item => item !== city)].slice(0, 5);
    }
  },
  actions: {
    getWeatherData(context, city) {
      getWeatherIn(city).then(
        response => {
          context.commit('setCity', city);
          context.commit('setWeatherData', response.main);
          context.commit('setErrorMessage', '');
          context.commit('addToSearchHistory', city);
        }
      ).catch(
        error => {
          context.commit('setWeatherData', null);
          if (error.status === 404) {
            context.commit('setErrorMessage', `Informacij o vremenu za mesto "${city}" ni mogoče najti`);
          }
          else {
            context.commit('setErrorMessage', 'Prišlo je do napake pri pridobivanju podatkov o vremenu');
          }
        }
      )
    },
    clearWeatherData(context) {
      context.commit('setCity', '');
      context.commit('setWeatherData', null);
      context.commit('setErrorMessage', '');
    }
  },
  modules: {
  }
})
