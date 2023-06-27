import { useContext, useState } from "react"
import { contexto } from "../Context/ContextoContainer"
import { StyleSheet,View,Text,TextInput,TouchableOpacity,Modal,ScrollView } from "react-native";
import { Error404 } from "./Error404";
import { Añadir } from "./Añadir";
import { ModalIngresoGasto } from "./ModalIngresoGasto";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export function ModalModificar(){

    const{
        vistaPresupuesto,setVistaPresupuestos,
        elementoSeleccionado,btnIngresos,setBtnIngresos,
        btnGastos,setBtnGastos,setToggleModalIngresoGasto
        ,setCategoriaSelect,Presupuestos,setPresupuestos
    }=useContext(contexto);


    function renderizarListados(){
        if(btnIngresos){
            if(Presupuestos[elementoSeleccionado].ingresos.length === 0){
                return(
                    <Error404 mensaje={'Ingresos'}/>
                )
            }else{
                return(
                    <Text>Ingresos</Text>
                )
            }
        }else if(Presupuestos[elementoSeleccionado].gastos.length === 0){
            return(
                <Error404 mensaje={'Gastos'}/>
            )
        }else{
            return(
                <Text>Gastos</Text>
            )
        }
    }
    function toggleIngreso(){
        if(btnIngresos){
            setBtnIngresos(true)
            setBtnGastos(false)
        }else{
            setBtnGastos(false)
            setBtnIngresos(true)
        }
    }
    function togglegasto(){
        if(btnGastos){
            setBtnGastos(true)
            setBtnIngresos(false)
        }else{
            setBtnIngresos(false)
            setBtnGastos(true)
        }
    }

    function cerrarPantalla(){
        setVistaPresupuestos(false)
    }

    function añadir(){
        if(btnIngresos){
            setToggleModalIngresoGasto(true)
            setCategoriaSelect('Ingreso')
        }else{
            setToggleModalIngresoGasto(true)
            setCategoriaSelect('Gasto')
        }
    }

    return(
        <Modal visible={vistaPresupuesto} animationType="slide">
            <View style={estilos.containerModal}>
                <View style={estilos.encabezado}>
                    <MaterialIcons name="monetization-on" size={64} color="#FFD95A" />
                    <Text style={estilos.textEncabezado}>$ {Presupuestos[elementoSeleccionado]} COP</Text>
                    <Text style={estilos.subTextEncabezado}>Presupuesto Total</Text>
                </View>
                <View style={estilos.menuBar}>
                    <TouchableOpacity style = {estilos.botonCategoria} onPress={toggleIngreso}>
                        <Text style = {estilos.botonText}>Ingresos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {estilos.botonCategoria} onPress={togglegasto}>
                        <Text style = {estilos.botonText}>Gastos</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {renderizarListados()}
                </ScrollView>
                <TouchableOpacity style={estilos.btnCerrar} onPress={cerrarPantalla}>
                    <Ionicons name="arrow-back-sharp" size={34} color="#377c2b" />
                </TouchableOpacity>
                <Añadir accion={añadir}/>
                <ModalIngresoGasto/>
            </View>        
        </Modal>
    )
}

const estilos = StyleSheet.create({
    containerModal:{
        flex:1,
        position:'relative'
    },
    encabezado:{
        height:200,
        backgroundColor:'#E3F4F4',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        alignItems:'center',
        justifyContent:'center'
    },
    textEncabezado:{
        fontSize:40, 
        fontWeight:'900'
    },subTextEncabezado:{
        fontSize:20, 
        fontWeight:'700',
    },
    menuBar:{
        height:60,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        gap:50
    },
    botonCategoria:{
        height:40,
        backgroundColor:'#579e49',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        borderRadius:20,
    },
    botonText:{
        fontSize:18,
        fontWeight:'600',
        color:'#fff'
    },
    btnCerrar:{
        position:'absolute',
        top:5,
        left:5,
        height:40,
        width:40,
        alignItems:'center',
        justifyContent:'center',
    }
})