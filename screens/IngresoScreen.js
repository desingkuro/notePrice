import { View , Text ,StyleSheet, Modal, TextInput,TouchableOpacity, ScrollView} from "react-native";
import { Error404 } from "../Components/Error404";
import { Añadir } from "../Components/Añadir";
import { contexto } from "../Context/ContextoContainer";
import { useContext, useEffect } from "react";
import { ModalGeneral } from "../Components/ModalGeneral";
import { Card } from "../Components/Card";

export function IngresoScreen(){

    const {activoIngresos,ingresos} = useContext(contexto)

    useEffect(()=>{
        renderizarcomponentes()
    },[ingresos])

    function renderizarcomponentes(){
        if(activoIngresos || ingresos.length > 0){
            console.log('entro al if')
            return (
                <ScrollView style={estilos.scrollContainer}>
                    {
                        ingresos.map((ingreso,index)=>{
                            console.log(ingreso,index)
                            const {nombre,valor}=ingreso;
                            return(
                                <Card key={index} nombre={nombre} valor={valor}/>
                            )
                        })
                    }
                </ScrollView>
            )
        }else{
            return(
                <Error404/>
            )
        }
    }

    return (
        <View style={estilos.container}>
            {renderizarcomponentes()}
            <Añadir screen={'Ingresos'}/>
            <ModalGeneral screen={'Ingreso'}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        position:'relative',
    },scrollContainer:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10
    },containerModal:{
        backgroundColor:'white',
        flex:1,
        padding:30,
    },
    tituloModal:{
        fontSize:35,
        fontWeight:'900',
        marginBottom:50,
        marginTop:100
    },tituloInput:{
        fontSize:20,
    },inputText:{
        height:50,
        marginBottom:60,
        padding:4,
        borderBottomWidth:2,
        fontSize:25
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
