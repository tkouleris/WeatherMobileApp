import {StatusBar} from 'expo-status-bar';
import {useEffect, useState} from "react";
import * as http from "./util/http";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainComponent from "./components/MainComponent";
import {Ionicons} from "@expo/vector-icons";
import MenuComponent from "./components/MenuComponent";

const Stack = createNativeStackNavigator();

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [currentWeather, setCurrentWeather] = useState({
        dt: '',
        image: 'https://weather.tkouleris.eu/static/dist/img/weather_app.png',
        temperature: '',
        location: '',
        humidity: '',
        wind_speed: '',
        feels_like: '',
        description: ''
    })

    const [forecast, setForecast] = useState([])
    const [cities, setCities] = useState([])
    const [cityId, setCityId] = useState(209098)
    async function getData(cityId) {
        setCurrentWeather({
            dt: '',
            image: 'https://weather.tkouleris.eu/static/dist/img/weather_app.png',
            temperature: '',
            location: '',
            humidity: '',
            wind_speed: '',
            feels_like: '',
            description: ''
        });
        setForecast([]);
        return await http.fetchData(cityId)
    }
    useEffect(() => {
        setIsLoading(true)

        getData(cityId).then((d) => {
            setCurrentWeather(d.current_weather)
            setForecast(d.forecast)
            setCities(d.cities)
            setIsLoading(false)
        })

    }, []);

    async function refresh() {
        const data = await http.fetchData(cityId)
        if (data.current_weather.timestamp > currentWeather.timestamp) {
            setCurrentWeather(data.current_weather)
            setForecast(data.forecast)
        }
    }

    function menu(navigation, cities){
        navigation.navigate('Menu', {'cities': cities})
    }

    function selectCityHandler(cityId){
        setIsLoading(true)
        setCityId(cityId);
        getData(cityId).then((d) => {
            setCurrentWeather(d.current_weather)
            setForecast(d.forecast)
            setIsLoading(false)
        })

    }

    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator>
                <Stack.Screen

                    name="MainComponent"
                    options={({navigation}) => ({
                        title: 'Forecast',
                        headerTitleAlign: 'center',
                        headerLeft: ({tintColor}) => (
                            <Ionicons
                                icon="menu"
                                size={24}
                                color={tintColor}
                                style={{marginRight: 15}}
                                onPress={menu.bind(this,navigation, cities)}
                                name="menu"
                            />
                        ),
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
                    {props => <MainComponent {...props} isLoading={isLoading} currentWeather={currentWeather} forecast={forecast}/>}
                </Stack.Screen>
                <Stack.Screen name="Menu">
                    {props => <MenuComponent {...props} cities={cities} onSelect={selectCityHandler} />}
                </Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    );
}
