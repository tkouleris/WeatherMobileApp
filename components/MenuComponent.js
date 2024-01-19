import {Pressable, ScrollView, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

function MenuComponent({cities}){

    function citySelectionHandler(cityId){
        console.log(cityId)
    }

    return <View>
        <ScrollView >
            {
                cities.map((division, index) => (
                <View key={index}>
                    <View style={styles.divisionContainer}>
                        <Text style={styles.division_title}>{division.division}</Text>
                    </View>
                    {
                        division.data.map((city, city_index)=>(
                            <Pressable key={city.id} onPress={citySelectionHandler.bind(this, city.id)}>
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
    divisionContainer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
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
        margin: 5
    }
})