import { View , StyleSheet , Text} from "react-native"

import { contexto } from "../Context/ContextoContainer"
import { useContext } from "react"
import { Error404 } from "../Components/Error404";
import { Item } from "../Components/Item";
import { ScrollView } from "react-native-gesture-handler";

export function IngresoScreen(){

    const{Presupuestos} = useContext(contexto);

    function renderInterfaz() {
        if (Presupuestos.length === 0) {
          return <Error404 mensaje={'ingresos'} />;
        }
        return (
          <ScrollView style={estilos.scrollContainer}>
            {Presupuestos.map((elemento) => {
              return elemento.ingresos.map((ingreso, i) => {
                return <Item elemento={ingreso} key={i} icon={true}/>;
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