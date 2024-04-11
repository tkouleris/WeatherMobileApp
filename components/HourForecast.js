import {Image, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

function HourForecast({itemKey, hourData}){
    return <View style={styles.forecast_day_hour_container} key={itemKey}>

        <View style={styles.forecast_day_hour_container_data}>

            <View style={styles.forecast_day_hour_container_datum}>
                <Ionicons name={'time'} size={18} />
                <Text style={styles.forecast_day_hour_text}>{hourData.time}</Text>
            </View>
            <View style={styles.forecast_day_hour_container_datum}>
                <Ionicons name={'thermometer'} size={18} />
                <Text style={styles.forecast_day_hour_text}> {hourData.temp} °C</Text>
            </View>
            <View style={styles.forecast_day_hour_container_datum}>
                <Ionicons name={'water'} size={18} />
                <Text style={styles.forecast_day_hour_text}> {hourData.humidity} %</Text>
            </View>
            <View style={styles.forecast_day_hour_container_datum}>
                <Ionicons name={'flag'} size={18} />
                <Text style={styles.forecast_day_hour_text}> {hourData.wind_speed} m/s</Text>
            </View>
        </View>
        <View style={styles.forecast_day_hour_container_description}>
            <Image
                style={{width:45, height:45}}
                source={{
                    uri: 'https://openweathermap.org/img/wn/'+hourData.icon+'@2x.png',
                }}
            />
            <Text style={styles.forecast_day_hour_text_description}> {hourData.description} </Text>
        </View>

    </View>
}

export default HourForecast;

const styles = StyleSheet.create({
    forecast_day_hour_container:{
        marginTop: 5,
        flexDirection:'column',
        borderBottomWidth: 1
    },
    forecast_day_hour_container_data:{
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
    },
    forecast_day_hour_container_datum:{
        width: '25%',
        flexDirection:'row',
        alignItems:'center',
    },
    forecast_day_hour_text:{
        marginRight: 5
    },
    forecast_day_hour_container_description:{
        width: '100%',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    forecast_day_hour_text_description:{
        marginRight: 5,
        paddingTop:20,
        height: 45,
        verticalAlign: 'bottom'
    }
})