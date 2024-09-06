# Weather info app

## Description

This is a simple weather info app that uses the OpenWeatherMap API to get the weather information of a city. The app displays the current temperature and humidity of the city in celcius.

## Project setup

Clone the repository by running
```
git clone git@github.com:martin-stojanoski/weather.git
```

Using docker, build an app image and run it
```
cd weather
docker build -t weather .
docker run weather
```
