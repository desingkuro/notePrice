import { View , Text ,StyleSheet, Modal, TextInput,TouchableOpacity, Alert} from "react-native";
import { contexto } from "../Context/ContextoContainer";
import { useContext, useState } from "react";


export function ModalGeneral(){
        
    const {addPresupuesto,toggleModalPresupuesto,addNewPresupuesto} = useContext(contexto)
    
    const[texto,setTexto]=useState('');
    const[monto,setMonto]=useState('');

    function obtenerValores(){
        if(verificarInputs()){
            const fechaActual = obtenerFechaActual();
            addNewPresupuesto(texto,monto,fechaActual)
            resetInputs()
            toggleModalPresupuesto()
        }else{
            Alert.alert('Debe llenar todos los campos')
        }
    }

    function resetInputs(){
        setMonto('')
        setTexto('')
    }

    function obtenerFechaActual() {
        const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript se indexan desde 0
        const anio = fechaActual.getFullYear();
      
        const fechaCompleta = dia +'/'+mes+'/'+anio
        return fechaCompleta
    }

    function verificarInputs(){
        if(texto != '' && monto != ''){
            return true
        }
        return false
    }

    return(
        <Modal visible={addPresupuesto} animationType="slide">
                <View style={estilos.containerModal}>
                    <Text style={estilos.tituloModal}>Nuevo Presupuesto</Text>
                    <Text style={estilos.tituloInput}>Titulo:</Text>
                    <TextInput
                        value={texto}
                        style={estilos.inputText}
                        placeholder="Ingresa el titulo"
                        onChangeText={v=>{setTexto(v)}}
                    />
                    <Text style={estilos.tituloInput}>Monto:</Text>
                    <TextInput
                        style={estilos.inputText}
                        placeholder="Ingresar el monto"
                        value={monto}
                        keyboardType="numeric"
                        onChangeText={v=>{setMonto(v)}}
                    />
                    <TouchableOpacity style={estilos.botonGuardar} onPress={obtenerValores}>
                        <Text style={estilos.textBoton}>Guardar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botonCancelar} onPress={toggleModalPresupuesto}>
                        <Text style={estilos.textBoton}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
    )
}

const estilos = StyleSheet.create({
    containerModal:{
        backgroundColor:'#BDCDD6',
        flex:1,
        padding:30,
    },
    tituloModal:{
        fontSize:35,
        fontWeight:'900',
        marginBottom:50,
    },tituloInput:{
        color:'#537188',
        fontSize:20,
        marginBottom:10,
    },inputText:{
        height:40,
        marginBottom:40,
        borderBottomWidth:2,
        fontSize:20,
        paddingLeft:14,
        paddingTop:10,
        paddingBottom:10
    },botonGuardar:{
        height:50,
        width:'100%',
        alignItems:'center',
        backgroundColor:'#301E67',
        justifyContent:'center'
    },textBoton:{
        fontSize:20,
        color:'white',
        fontWeight:'600'
    },botonCancelar:{
        height:50,
        width:'100%',
        alignItems:'center',
        backgroundColor:'#D25380',
        justifyContent:'center'
        ,marginTop:30
    }
})