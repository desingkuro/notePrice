import { useContext, useState } from "react"
import { Modal,View, Text, StyleSheet,TouchableOpacity, TextInput} from "react-native"
import { contexto } from "../Context/ContextoContainer"
import Toast from 'react-native-toast-message';

import { Ionicons } from '@expo/vector-icons';
import { Alert } from "react-native";

export function ModalIngresoGasto(){
    
    const {
        toggleModalIngresoGasto,setToggleModalIngresoGasto,
        categoriaSelect,description,setDescription,Valor,setValor,Presupuestos,
        elementoSeleccionado,obtenerFechaActual
    }=useContext(contexto);

    function cerrarPantalla(){
        setToggleModalIngresoGasto(false)
    }

    function verificarInputs(){
        const result = description === '' && Valor === '' ? false : true
        return result
    }

    function VerificarGuardado(){
        if(verificarInputs()){
            guardarNuevo(categoriaSelect);
            resetInputs();
            cerrarPantalla();
        }else{
            Alert.alert('Debe llenar todos los campos para seguir')
        }
    }

    function resetInputs(){
        setDescription('');
        setValor('');
    }

    function guardarNuevo(categoria){
        const fechaNueva = obtenerFechaActual();
        const elemento = {
            titulo:description,
            monto:Valor,
            fecha:fechaNueva
        }
        if(categoria==='Ingreso'){
            Presupuestos[elementoSeleccionado].ingresos.push(elemento);
        }else{
            Presupuestos[elementoSeleccionado].gastos.push(elemento);
        }
    }

    return(
        <Modal
            visible={toggleModalIngresoGasto}
            animationType="slide"
        >
            <View style={estilos.container}>
                <Text style={estilos.textModal}>Añadir {categoriaSelect}</Text>
                <Text style={estilos.labelInputs}>Descripción:</Text>
                <TextInput
                    style={estilos.inputs}
                    value={description}
                    placeholder="Ingresa descripción"
                    onChangeText={v=>{setDescription(v)}}
                />
                <Text style={estilos.labelInputs}>Monto:</Text>
                <TextInput
                    style={estilos.inputs}
                    value={Valor}
                    placeholder='Ingresar monto'
                    onChangeText={v=>{setValor(v)}}
                    inputMode="numeric"
                />
                <TouchableOpacity style={estilos.btnGuardar} onPress={VerificarGuardado}>
                    <Text style={estilos.textBoton}>Guardar {categoriaSelect}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.btnCerrar} onPress={cerrarPantalla}>
                    <Ionicons name="arrow-back-sharp" size={34} color="#377c2b" />
                </TouchableOpacity>
            </View>

        </Modal>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        padding:60
    },
    btnCerrar:{
        position:'absolute',
        top:5,
        left:5,
        height:40,
        width:40,
        alignItems:'center',
        justifyContent:'center',
    }, 
    textModal:{
        fontSize:40,
        fontWeight:'900',
        color:'#22138e'
    },
    inputs:{
        height:40,
        width:'95%',
        borderWidth:1,
        paddingLeft:10,
        borderRadius:10,
        marginTop:5
        ,borderColor:'#2b16b5'
    },
    labelInputs:{
        marginTop:40
    },
    btnGuardar:{
        height:50,
        width:'100%',
        alignItems:'center',
        backgroundColor:'#301E67',
        justifyContent:'center',
        marginTop:30,
    },
    textBoton:{
        fontSize:20,
        color:'white',
        fontWeight:'600'
    }
})