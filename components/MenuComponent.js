import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import ButtonSave from "./UI/ButtonSave";

function MenuComponent({navigation, cities, onSelect, defaultCity, onDefaultCitySelection}){

    function citySelectionHandler(cityId){
        onSelect(cityId);
        navigation.navigate('MainComponent')
    }

    function setDefaultCityHandler(selected){
        onDefaultCitySelection(selected)
        defaultCity = selected
    }

    function DefaultButton({defaultCity , currentCity}){
        if(defaultCity !== currentCity){
            return <View style={styles.defaultButton}>
                <ButtonSave
                    onPress={setDefaultCityHandler.bind(this,currentCity)}
                    size={14}

                />
                {/*<Button*/}
                {/*    onPress={setDefaultCityHandler.bind(this,currentCity)}*/}
                {/*    title="*"*/}
                {/*/>*/}
            </View>
        }
    }

    return <View style={styles.menuContainer}>
        <ScrollView >
            {
                cities.map((division, index) => (
                <View key={index}>
                    <View style={styles.divisionContainer}>
                        <Text style={styles.division_title}>{division.division}</Text>
                    </View>
                    {
                        division.data.map((city, city_index)=>(

                                <View key={city.id} style={styles.cityContainer}>
                                    <Pressable
                                        onPress={citySelectionHandler.bind(this, city.id)}
                                        style={({pressed})=>[styles.citySelection, pressed && styles.pressed]}
                                    >
                                        <View >
                                            <Text>- {city.name}</Text>
                                        </View>
                                    </Pressable>
                                    <DefaultButton defaultCity={defaultCity} currentCity={city.id}/>

                                </View>

                        ))

                    }

                </View>

                ))
            }

        </ScrollView>

    </View>
}

export default MenuComponent

const styles = StyleSheet.create({
    menuContainer:{
        paddingTop: 10,
        paddingBottom:20
    },
    divisionContainer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingTop: 30,
    },
    division_title:{
        fontWeight:'bold',
        fontSize: 20
    },
    cityContainer:{
        flexDirection: 'row',
        paddingLeft: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#000',
        margin: 5,
        borderRadius:10
    },
    pressed:{
        opacity: 0.75,
        backgroundColor: '#5a5a5a',
        borderRadius: 4
    },
    citySelection:{
        width: '90%',

        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    defaultButton:{
        height: 30,
        paddingTop:0,
        paddingBottom:0
    }
})