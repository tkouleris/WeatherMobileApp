import axios from 'axios'
import * as config from '../config'



export async function fetchData(){
    const response = await axios.get(config.URL + '209098')
    // console.log(response.data.current_weather.timezone)
    // console.log(Date.parse(response.data.current_weather.dt) -response.data.current_weather.timezone)
    let date = new Date(Date.parse(response.data.current_weather.dt));
    let final_date = date.getFullYear()+
    "-"+(date.getMonth() + 1).toString().padStart(2, '0')+
    "-"+date.getDate().toString().padStart(2, '0')+
    " "+date.getHours().toString().padStart(2, '0')+
    ":"+date.getMinutes().toString().padStart(2, '0')+
    ":"+date.getSeconds().toString().padStart(2, '0');

    let cweather = {
        date: final_date+" (local)",
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