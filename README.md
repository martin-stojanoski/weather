# Weather info app

## Description

This is a simple weather info app that uses the OpenWeatherMap API to get the weather information of a city. The app displays the current temperature and humidity of the city in celcius.

## Project setup

### Installing dependencies

Run the following command to install the required dependencies
```
npm install
```

### Creating a .env file

Create a `.env` file in the root directory of the project and add the following line to it.
```
VUE_APP_OPENWEATHERMAP_API_KEY=YOUR_API_KEY
```
Replace `YOUR_API_KEY` with your OpenWeatherMap API key, which you can get by signing up at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).

### Compiling and hot-reloads for development
Since this app doesnt have a backend at the moment, it can be run with the following command.
```
npm run serve
```

### Compiling and minifying for production
```
npm run build
```