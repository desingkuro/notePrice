import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { Entypo } from '@expo/vector-icons';
import { useContext } from "react";
import { contexto } from "../Context/ContextoContainer";

export function Añadir(props){

    const {setModalIngreso} = useContext(contexto);
    
    function modalGastos(){
        return(
            setModalIngreso(true)
        )
    }
    function modalIngresos(){
        setModalIngreso(true)
    }
    function modalPresupuestos(){
        return(
            'hola'
        )
    }
    function modal(){
        if(props.screen==='Ingresos'){
            modalIngresos()
        }else if(props.screen==='Gastos'){
            modalGastos()
        }else{
            modalPresupuestos()
        }
    }

    return(
        <TouchableOpacity style={estilos.boton} onPress={modal}>
            <Entypo name="plus" size={44} color="white" />
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    boton:{
        height:70,
        width:70,
        backgroundColor:'#301E67',
        alignItems:'center',
        justifyContent:'center',
        zIndex:999,
        position:'absolute',
        borderRadius:35,
        top:600,
        right:20
    }
})
