import { View,Text,Image,StyleSheet } from "react-native";

export function Error404({mensaje}){
    return(
        <View style={style.containerNotFound}>
            <Image source={require('../icons/sin-conexion.png')} style={style.imgNotFound}/>
            <Text style={style.textNotfound}>
                No hay {mensaje} guardados
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    containerNotFound:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:500,
        width:'100%',
    },
    imgNotFound:{
        width: '60%',
        height:200,
        marginBottom:20,
        opacity:.4
    },
    textNotfound:{
        fontSize:22,
        fontWeight:'700',
        color:'#BDCDD6'
    }
})