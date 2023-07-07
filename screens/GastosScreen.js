import { View, StyleSheet, Text, ScrollView} from "react-native"

import { contexto } from "../Context/ContextoContainer"
import { useContext } from "react"
import { Error404 } from "../Components/Error404";
import { Item } from "../Components/Item";


export function GastosScreen(){
    const{Presupuestos} = useContext(contexto);

    function renderInterfaz() {
        if (Presupuestos.length === 0) {
          return <Error404 mensaje={'gastos'} />;
        }
        return (
          <ScrollView style={estilos.scrollContainer}>
            {Presupuestos.map((elemento) => {
              return elemento.ingresos.map((gasto, i) => {
                return <Item elemento={gasto} key={i} icon={false}/>;
              });
            })}
          </ScrollView>
        );
      }
      

    return(
        <View style={estilos.container}>
            {renderInterfaz()}
        </View>
    )
}


const estilos = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    scrollContainer:{
        width:'100%',
        paddingTop:80,
        paddingBottom:10,
        paddingLeft:10
    }
})