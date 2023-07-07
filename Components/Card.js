import { useContext } from "react"
import { TouchableOpacity } from "react-native";
import { contexto } from "../Context/ContextoContainer"
import { View,Text,StyleSheet } from "react-native";

export function Card({elemento,indice,funcion}){

    const{vistaPresupuesto,setVistaPresupuestos,
        elementoSeleccionado,setElementoSeleccionado
    }=useContext(contexto);


    function abrirVentana(){
        enviarElemento()
        funcion()
    }
    function enviarElemento(){
        setElementoSeleccionado(indice)
    }

    function valorMonto(){
        let valorActual = parseInt(elemento.monto)
        let valorFormateado ='$ '+new Intl.NumberFormat().format(valorActual)+' COP'
        return(valorFormateado)
    }

    return(
        <View style={style.card} >
            <TouchableOpacity onPress={abrirVentana}>
                <Text style={style.titulo}>
                    {elemento.titulo}
                </Text >
                <Text style={style.monto}>
                    {valorMonto()}
                </Text>
                <Text style={style.fecha}>
                    {elemento.fecha}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    card:{
        height:110,
        backgroundColor:'#ffff',
        padding:10,
        marginBottom:20,
        borderRadius:20
    },titulo:{
        fontSize:15
    },monto:{
        fontSize:28,
        fontWeight:'800',
        color:'#301E67',
    },fecha:{
        fontSize:15,
        textAlign:'right',
        width:'95%',
        fontWeight:'800',
    }
})