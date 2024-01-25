import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

function MenuComponent({navigation, cities, onSelect}){

    function citySelectionHandler(cityId){
        onSelect(cityId);
        navigation.navigate('MainComponent')
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
                            <Pressable
                                key={city.id}
                                onPress={citySelectionHandler.bind(this, city.id)}
                                style={({pressed})=> pressed && styles.pressed}
                            >
                                <View  style={styles.cityContainer}>
                                    <Text>- {city.name}</Text>
                                </View>
                            </Pressable>
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
        paddingLeft:20,
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
    }
})