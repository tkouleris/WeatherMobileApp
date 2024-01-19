import {FlatList, StyleSheet, Text, View} from "react-native";
import CurrentWeatherCard from "./CurrentWeatherCard";
import ForecastDay from "./ForecastDay";

function MainComponent({currentWeather, forecast}) {
    return <View style={styles.container}>
        <CurrentWeatherCard currentWeather={currentWeather}/>
        <View style={styles.forecast_container}>
            <View style={styles.forecast_title_container}>
                <Text style={styles.forecast_title_text}>5 day / 3 hour forecast</Text>
            </View>
            <View>
                <FlatList data={forecast} renderItem={itemData => {
                    return <ForecastDay item={itemData}/>
                }}/>
            </View>

        </View>
    </View>
}

export default MainComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,

    },
    forecast_container: {
        width: '100%',
        flex: 2,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    forecast_title_container: {
        marginVertical: 20
    },
    forecast_title_text: {
        fontSize: 18,
        color: '#fff',
        textDecorationLine: 'underline',
    },
});