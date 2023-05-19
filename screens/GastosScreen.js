import { View , Text, StyleSheet, ScrollView} from "react-native";
import { Error404 } from "../Components/Error404";
import { Añadir } from "../Components/Añadir";
import { ModalGeneral } from "../Components/ModalGeneral";
import { contexto } from "../Context/ContextoContainer";
import { useContext,useEffect } from "react";
import { Card } from "../Components/Card";

export function GastosScreen(){

    const {activoGastos,gastos} = useContext(contexto)

    useEffect(()=>{
        renderizarcomponentes()
    },[gastos])

    function renderizarcomponentes(){
        if(activoGastos || gastos.length > 0){
            return (
                <ScrollView style={estilos.scrollContainer}>
                    {
                        gastos.map((gasto,index)=>{
                            console.log(gasto,index)
                            const {nombre,valor}=gasto;
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
        <>
            <View style={estilos.container}>
                <Añadir screen={'Gastos'}/>
                {renderizarcomponentes()}
                <ModalGeneral screen={'Gasto'}/>
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex:1
    },scrollContainer:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10
    }
})