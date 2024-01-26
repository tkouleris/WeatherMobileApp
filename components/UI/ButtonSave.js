import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons'

function ButtonSave({size, color, onPress}){
    return <Pressable style={({pressed})=>[styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Ionicons  name="bookmark" size={size} color={color} />
    </Pressable>
}

export default ButtonSave;

const styles = StyleSheet.create({
    button:{
        padding: 8,
        backgroundColor: '#ffff00',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent:'center',
        alignItems: 'center'
    },
    pressed:{
        opacity: 0.7
    }
})