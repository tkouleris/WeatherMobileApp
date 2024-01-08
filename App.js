import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Image} from 'react-native';
import {useEffect, useState} from "react";
import * as http from "./util/http";


export default function App() {
    const [currentWeather, setCurrentWeather] = useState({
        dt: '',
        image:'',
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
            console.log(data.current_weather);
            setCurrentWeather(data.current_weather);
        }


        getData()
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.current_weather_container}>

                <View style={styles.current_weather_container_1}>
                    <Text>2024-01-08 18:07:07</Text>
                    <Text>{currentWeather.location}</Text>
                    <Text>{currentWeather.description}</Text>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: currentWeather.image,
                        }}
                    />
                </View>
                <View style={styles.current_weather_container_2}>
                    <Text style={styles.temperature_text}>{currentWeather.temperature}°C</Text>
                    <Text style={styles.feels_like_text}>Feels like {currentWeather.feels_like}°C</Text>
                </View>
                {/**/}
            </View>
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
    current_weather_container: {
        marginTop: 50,
        flex: 2,
        backgroundColor: '#D3D3D3',
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'row',

    },
    current_weather_container_1:{
        paddingHorizontal: 5,
        width:'35%'
    },
    current_weather_container_2:{
        width:'65%',
        alignItems:'center'
    },
    forecast_container:{
        width: '100%',
        flex: 10,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    temperature_text:{
        fontWeight:'bold',
        fontSize: 30,
    },
    feels_like_text:{
        fontSize: 10,
        // justifyContent:'center'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
