import {StyleSheet, Text, View} from "react-native";
import HourForecast from "./HourForecast";


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
                        <HourForecast key={key} itemKey={key} hourData={hourData} />


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
        paddingBottom:5,
        borderRadius: 8,
        elevation: 18,
        marginBottom:30,
        height: 'auto',
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
})