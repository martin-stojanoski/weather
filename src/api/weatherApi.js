import axios from 'axios';

const weatherApi = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});

const getWeatherIn = async (city) => {
    const response = await weatherApi.get(`?q=${city}&appid=${process.env.VUE_APP_OPENWEATHERMAP_API_KEY}&units=metric`);
    return response.data;
}

export default getWeatherIn;