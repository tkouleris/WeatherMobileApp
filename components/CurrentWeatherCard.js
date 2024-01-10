import {Image, StyleSheet, Text, View} from "react-native";

function CurrentWeatherCard({currentWeather}){
    return  <View style={styles.current_weather_container}>
        <View style={styles.current_weather_header}>
            <Text style={styles.current_weather_header_text}>
                {currentWeather.location} - {currentWeather.date}
            </Text>
        </View>
        <View style={styles.current_weather_main}>
            <View style={styles.current_weather_left}>
                <Image
                    style={styles.current_weather_icon}
                    source={{
                        uri: currentWeather.image,
                    }}
                />
            </View>
            <View style={styles.current_weather_center}>
                <Text style={styles.current_weather_center_text}>{currentWeather.temperature}°C</Text>
                <Text>Feels like {currentWeather.feels_like}°C</Text>
            </View>
            <View style={styles.current_weather_right}>
                <View style={styles.current_weather_right_measurement}>
                    <Text style={styles.current_weather_right_label}>Humidity: </Text>
                    <Text>{currentWeather.humidity} %</Text>
                </View>
                <View style={styles.current_weather_right_measurement}>
                    <Text style={styles.current_weather_right_label}>Wind Speed: </Text>
                    <Text>{currentWeather.wind_speed} m/s</Text>
                </View>

            </View>

        </View>
        <View style={styles.current_weather_description_container}>
            <Text style={styles.current_weather_description}>{currentWeather.description}</Text>
        </View>
    </View>
}

export default CurrentWeatherCard;

const styles = StyleSheet.create({
    current_weather_container: {
        borderRadius: 8,
        elevation: 18,
        marginTop: 50,
        marginBottom:10,
        height: 130,
        backgroundColor: '#D3D3D3',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        flexDirection: 'column',
    },
    current_weather_container_1:{
        paddingHorizontal: 5,
        width:'35%'
    },
    current_weather_container_2:{
        width:'65%',
        alignItems:'center'
    },

    temperature_text:{
        fontWeight:'bold',
        fontSize: 30,
    },
    feels_like_text:{
        fontSize: 10,
        // justifyContent:'center'
    },
    current_weather_icon: {
        width: 100,
        height: 70,
    },
    current_weather_header:{
        paddingHorizontal:5,
        flexDirection: 'row',
        justifyContent:'space-evenly',
        alignItems: 'center',
        width:'100%',
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    current_weather_header_text:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    current_weather_main:{
        flexDirection: "row"
    },
    current_weather_left:{
        width: '35%'
    },
    current_weather_center:{
        alignItems:'center',
        justifyContent:'center'
    },
    current_weather_center_text:{
        fontSize:30,
    },
    current_weather_right:{
        width: '30%',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingLeft:50
    },
    current_weather_right_measurement:{
        flexDirection:'row'
    },
    current_weather_right_label:{
        fontWeight:"bold"
    },
    current_weather_description_container:{
        width:'100%',
        alignItems:'center'
    },
    current_weather_description:{
        width: '100%',
        textAlign: 'center'
    }
})