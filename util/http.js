import axios from 'axios'
import * as config from '../config'



export async function fetchData(){
    const response = await axios.get(config.URL + '209098')

    let timestamp = Date.parse(response.data.current_weather.dt) - (response.data.current_weather.timezone / 0.001);
    let date = new Date(timestamp);

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

    let forecast = [];
    let current_day_of_the_week = dayOfWeek(new Date(Date.parse(response.data.current_weather.dt)).getDay());
    for(let index = current_day_of_the_week; index <= 7; index++){
        if(response.data.forecast[index] !== undefined){
            forecast.push(response.data.forecast[index])
        }
    }
    for(let index = 0; index < current_day_of_the_week; index++){
        if(response.data.forecast[index] !== undefined){
            forecast.push(response.data.forecast[index])
        }
    }

    return {
        'current_weather': cweather,
        'forecast': forecast
    };
}

function dayOfWeek(number){
    number = number-1;
    if(number < 0){
        number = 6
    }
    if(number > 6){
        number = 0;
    }
    return number;
}