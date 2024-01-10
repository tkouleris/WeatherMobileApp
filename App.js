import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useEffect, useState} from "react";
import * as http from "./util/http";
import CurrentWeatherCard from "./components/CurrentWeatherCard";


export default function App() {
    const [currentWeather, setCurrentWeather] = useState({
        dt: '',
        image:'https://weather.tkouleris.eu/static/dist/img/weather_app.png',
        temperature: '',
        location: '',
        humidity: '',
        wind_speed: '',
        feels_like: '',
        description: ''
    })

    useEffect(() => {
        async function getData() {
            const data = await http.fetchData()
            setCurrentWeather(data.current_weather);
        }


        getData()
    }, []);

    return (
        <View style={styles.container}>
            <CurrentWeatherCard currentWeather={currentWeather}/>
            <View style={styles.forecast_container}>
                <Text>Forecast</Text>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    forecast_container:{
        width: '100%',
        flex: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

});
