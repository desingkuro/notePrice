import { TouchableOpacity,StyleSheet, Text } from "react-native";

import { Entypo } from '@expo/vector-icons';


export function Añadir({accion}){
    return(
        <TouchableOpacity style={style.boton} onPress={accion}>
            <Entypo name="plus" size={64} color="grey" />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    boton:{
        position:'absolute',
        height:70,
        width:70,
        borderRadius:35,

        alignItems:'center',
        justifyContent:'center',

        bottom:25,
        backgroundColor:'#ffff',
        right:10
    }
})