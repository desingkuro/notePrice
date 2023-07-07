import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import { Feather } from '@expo/vector-icons';
import { Alert } from "react-native";
import { useContext } from "react";
import { contexto } from "../Context/ContextoContainer";

export function Item({index,elemento,funcion,icon}){

    const {indiceELiminar,setIndiceEliminar} = useContext(contexto);

    function valorMonto(){
        let valorActual = parseInt(elemento.monto)
        let valorFormateado ='$ '+new Intl.NumberFormat().format(valorActual)+' COP'
        return(valorFormateado)
    }

    function ejecutar(){
        setIndiceEliminar(index)
        funcion()
    }

    return(
        <TouchableOpacity style={style.container} onPress={ejecutar}>
            <Text style={style.titulo}>{elemento.titulo}</Text>
            <Text style={style.monto}> 
                {valorMonto()} 
                <Feather name="chevrons-up" size={20} color={icon?'#579e49':'red'} />
            </Text>
            <Text style={style.fecha}>{elemento.fecha}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        height:100,
        width:'90%',
        backgroundColor:'#D2E9E9',
        padding:20,
        marginBottom:20,
        borderRadius:20
    },
    titulo:{
        fontSize:15,
    },
    monto:{
        fontSize:23,
        fontWeight:'700'
    },
    fecha:{
        color:'#594545',
        fontWeight:'700'
    }
})