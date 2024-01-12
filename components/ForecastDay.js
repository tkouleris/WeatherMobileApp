import {Image, StyleSheet, Text, View} from "react-native";

function ForecastDay({item}){
    let forecast_day = item.item[0].day;
    let date = item.item[0].date
    return (
        <View style={styles.forecast_day_container}>
            <View style={styles.forecast_day_container_title_container}>
                <Text style={styles.forecast_day_container_title}>{forecast_day}</Text>
                <Text> - </Text>
                <Text>{date}</Text>
            </View>
            <View >
                {item.item.map((hourData, key) => {
                    // console.log('https://openweathermap.org/img/wn/'+hourData.icon+'@2x.png')
                    return (
                        <View style={styles.forecast_day_hour_container} key={key}>
                            <Text style={styles.forecast_day_hour_text}>{hourData.time}</Text>
                            <Text style={styles.forecast_day_hour_text}> {hourData.temp} °C</Text>
                            <Text style={styles.forecast_day_hour_text}> {hourData.humidity} %</Text>
                            <Text style={styles.forecast_day_hour_text}> {hourData.wind_speed} m/s</Text>
                            <Text style={styles.forecast_day_hour_text}> {hourData.description} </Text>
                            {/*<Image style={styles.forecast_day_hour_text}*/}
                            {/*    source={{*/}
                            {/*        uri: 'https://openweathermap.org/img/wn/'+hourData.icon+'@2x.png',*/}
                            {/*    }}*/}
                            {/*/>*/}
                        </View>

                    );
                })}
            </View>
        </View>
    )
}

export default ForecastDay;

const styles = StyleSheet.create({
    forecast_day_container:{
        paddingHorizontal: 5,
        borderRadius: 8,
        elevation: 18,
        marginBottom:30,
        height: 200,
        backgroundColor: '#D3D3D3',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        flexDirection: 'column',
    },
    forecast_day_container_title_container:{
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    forecast_day_container_title:{
        fontWeight: 'bold'
    },
    forecast_day_hour_container:{
        flexDirection:'row'
    },
    forecast_day_hour_text:{
        marginRight: 5
    }

})