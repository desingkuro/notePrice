import { View, Text, StyleSheet, TouchableOpacity,ScrollView, Alert } from "react-native";
import { Añadir } from "../Components/Añadir";
import { ModalIngresoGasto } from "../Components/ModalIngresoGasto";
import { useContext, useState} from "react"
import { contexto } from "../Context/ContextoContainer"
import { Error404 } from "../Components/Error404";

import { MaterialIcons } from '@expo/vector-icons';
import { Item } from "../Components/Item";
import { Modal } from "react-native";

export function DetalleScreen(){

    const{
        elementoSeleccionado,btnIngresos,setBtnIngresos,
        btnGastos,setBtnGastos,setToggleModalIngresoGasto
        ,setCategoriaSelect,Presupuestos,setPresupuestos,indiceELiminar,setIndiceEliminar,
        categoriaSelect,guardarAsyncPresupuestos
    }=useContext(contexto);
    
    const elemento = Presupuestos[elementoSeleccionado];
    const [toggleModalEliminar,setToggleModalEliminar]= useState(false)
    
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
            <View style={estilos.listado}>
                {elemento.ingresos.map((ingreso,index)=>{
                    return(
                        <Item elemento={ingreso} key={index} icon={true}  index={index} funcion={togeModalEliminar}/>
                    )
                })}
            </View>
        )
    }
    function listarGastos(){
        return(
            <View style={estilos.listado}>
                {elemento.gastos.map((gastos,index)=>{
                    return(
                        <Item elemento={gastos} key={index} icon={false} index={index} funcion={togeModalEliminar}/>
                    )
                })}
            </View>
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

    function calcularMonto(){
        if(elemento.ingresos.length === 0 && elemento.gastos.length === 0){
            return(
                elemento.monto
            )
        }else{
            let montoIngresos = 0;
            let montoGastos = 0;
            elemento.ingresos.map((e)=>{
                let valorActual = parseInt(e.monto)
                montoIngresos =  montoIngresos + valorActual
            })
            elemento.gastos.map((e)=>{
                let valorActual = parseInt(e.monto)
                montoGastos =  montoGastos + valorActual
            })
            let valorPresupuesto = parseInt(elemento.monto)
            let total = valorPresupuesto + montoIngresos - montoGastos
            let totalFormateado = new Intl.NumberFormat('de-DE').format(total)
            return totalFormateado
        }
    }
    function togeModalEliminar(){
        setToggleModalEliminar(!toggleModalEliminar)
    }
    function eliminar(){
        if(categoriaSelect === 'Ingreso'){
            Presupuestos[elementoSeleccionado].ingresos.splice(indiceELiminar,1)
        }else if(categoriaSelect === 'Gasto'){
            Presupuestos[elementoSeleccionado].gastos.splice(indiceELiminar,1)
        }
        togeModalEliminar()
        guardarAsyncPresupuestos()
    }
    return(
        <View style={estilos.containerModal}>
                <View style={estilos.encabezado}>
                    <MaterialIcons name="monetization-on" size={64} color="#FFD95A" />
                    <Text style={estilos.textEncabezado}>$ {calcularMonto()} COP</Text>
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
                <Modal  
                    visible={toggleModalEliminar}
                    transparent={true}    
                >
                    <View style={estilos.modalEliminar}>
                        <View style={estilos.containerMessageModal}>
                            <Text style={estilos.textModal}>¿Desea eliminar este elemento de la lista? </Text>
                            <View style={estilos.contenedorBtn}>
                                <TouchableOpacity style={estilos.botonModalCancelar} onPress={togeModalEliminar}>
                                    <Text style={{color:'white'}}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={estilos.botonModalEliminar} onPress={eliminar}>
                                    <Text style={{color:'white'}}>
                                        Eliminar
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
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
    },
    listado:{
        alignItems:'center',
        justifyContent:'center',
        width:'100%'
    },
    modalEliminar:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    containerMessageModal:{
        height:200,
        width:'90%',
        backgroundColor:'#fff',
        padding:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30
    },
    textModal:{
        fontSize:20,
        textAlign:'center',
        marginBottom:5
    },
    contenedorBtn:{
        flexDirection:'row',
        gap:20,
        marginTop:10
    },
    botonModalCancelar:{
        height:40,
        padding:10,
        backgroundColor:'#5B8FB9',
        borderRadius:10,
        marginBottom:10
    },botonModalEliminar:{
        height:40,
        padding:10,
        backgroundColor:'#FF9B9B',
        borderRadius:10
    }
})