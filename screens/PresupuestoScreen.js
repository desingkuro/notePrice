import { View , Text, StyleSheet} from "react-native";
import { Error404 } from "../Components/Error404";

export function PresupuestoScreen(){
    return (
        <View style={estilos.container}>
            <Error404 mensaje={'Presupuestos'}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex:1
    }
})