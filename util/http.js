import axios from 'axios'
import * as config from '../config'



export async function fetchData(){
    console.log(config.URL);
    const response = await axios.get(config.URL + '209098')

    let cweather = {
        date: response.data.current_weather.dt,
        image: 'https://openweathermap.org/img/wn/'+response.data.current_weather.weather[0].icon+'@2x.png',
        location: response.data.current_weather.name,
        temperature: response.data.current_weather.main.temp,
        humidity: response.data.current_weather.main.humidity,
        wind_speed: response.data.current_weather.wind.speed,
        feels_like: response.data.current_weather.main.feels_like,
        description: response.data.current_weather.weather[0].main + ", " + response.data.current_weather.weather[0].description
    }
    return {
        'current_weather': cweather
    };
}