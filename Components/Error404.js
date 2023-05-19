import { MaterialIcons } from '@expo/vector-icons';
import { View, Text , StyleSheet} from 'react-native';

export function Error404({mensaje}){
    return(
        <View style={estilos.containerMensaje}>
            <MaterialIcons name="error-outline" size={120} style={estilos.icono}/>
            <Text style={estilos.textoMensaje}>No se han encontrado {mensaje}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    containerMensaje:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    icono:{
        color:'#ebe6ea',
    },
    textoMensaje:{
        fontSize:20,
        fontWeight:'800',
        color:'grey'
    }
})