import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import { Añadir } from "../Components/Añadir";
import { ModalIngresoGasto } from "../Components/ModalIngresoGasto";
import { useContext, useState } from "react"
import { contexto } from "../Context/ContextoContainer"
import { Error404 } from "../Components/Error404";

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Card } from "../Components/Card";

export function DetalleScreen(){

    const{
        elementoSeleccionado,btnIngresos,setBtnIngresos,
        btnGastos,setBtnGastos,setToggleModalIngresoGasto
        ,setCategoriaSelect,Presupuestos,setPresupuestos
    }=useContext(contexto);

    const elemento = Presupuestos[elementoSeleccionado];
    
    function renderizarListados(){
        if(btnIngresos){
            if(elemento.ingresos.length === 0){
                return(
                    <Error404 mensaje={'Ingresos'}/>
                )
            }else{
                return(
                        listarIngresos()
                )
            }
        }else if(elemento.gastos.length === 0){
            return(
                <Error404 mensaje={'Gastos'}/>
            )
        }else{
            return(
                listarGastos()
            )
        }
    }

    function listarIngresos(){
        return(
            elemento.ingresos.map((ingreso,index)=>{
                return(
                    <Card elemento={ingreso} indice={index}/>
                )
            })
        )
    }
    function listarGastos(){
        return(
            elemento.gastos.map((gastos,index)=>{
                return(
                    <Card elemento={gastos} indice={index}/>
                )
            })
        )
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
        <View style={estilos.containerModal}>
                <View style={estilos.encabezado}>
                    <MaterialIcons name="monetization-on" size={64} color="#FFD95A" />
                    <Text style={estilos.textEncabezado}>$ {elemento.monto} COP</Text>
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
                <Añadir accion={añadir}/>
                <ModalIngresoGasto/>
            </View>
    )
}

const estilos = StyleSheet.create({
    containerModal:{
        flex:1,
        position:'relative'
    },
    encabezado:{
        height:160,
        backgroundColor:'#E3F4F4',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        alignItems:'center',
        justifyContent:'center',

        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity:  0.15,
        shadowRadius: 1.00,
        elevation: 1
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