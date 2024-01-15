import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {useEffect, useState} from "react";
import * as http from "./util/http";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastDay from "./components/ForecastDay";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainComponent from "./components/MainComponent";
import {Ionicons} from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

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

    const [forecast, setForecast] = useState([])

    useEffect(() => {
        async function getData() {
            return await http.fetchData()

            // setCurrentWeather(data.current_weather);
            // setForecast(data.forecast);
            // return data.forecast
        }
        getData().then((d)=>{
            setCurrentWeather(d.current_weather)
            setForecast(d.forecast)
        })

    }, []);

    async function refresh(){
        const data = await http.fetchData()
        if(data.current_weather.timestamp > currentWeather.timestamp){
            setCurrentWeather(data.current_weather)
            setForecast(data.forecast)
        }
    }

    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator >
                <Stack.Screen
                    name="MainComponent"
                    options={ ({navigation}) => ({
                    title: 'Forecast',
                    headerRight: ({tintColor}) => (
                        <Ionicons
                            icon="add"
                            size={24}
                            color={tintColor}
                            onPress={refresh}
                            name="refresh"
                        />
                    )
                })}
                >
                    {props => <MainComponent {...props} currentWeather={currentWeather} forecast={forecast} />}
                </Stack.Screen>
            </Stack.Navigator>
            {/*<MainComponent currentWeather={currentWeather} forecast={forecast} />*/}

        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#808080',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingHorizontal: 10,
//
//     },
//     forecast_container:{
//         width: '100%',
//         flex: 2,
//         flexDirection: 'column',
//         alignItems: 'stretch',
//         justifyContent: 'center',
//         marginTop: 10,
//         marginBottom: 30
//     },
//     forecast_title_container:{
//         marginVertical: 20
//     },
//     forecast_title_text:{
//         fontSize:18,
//         color: '#fff',
//         textDecorationLine: 'underline',
//     },
// });
