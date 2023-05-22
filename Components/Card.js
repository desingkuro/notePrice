import { View , Text, StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export function Card({nombre,valor,indice}){
    function convercionANumero(){
        const numero = parseFloat(valor);
        const formatoPesoColombiano = numero.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
    });
        return(
            <Text style={estilos.valor}>
                {formatoPesoColombiano} COP
            </Text>
        )
    }
    function mostrarIndice(){
        console.log(indice)
    }
    return(
        <View style={estilos.container}>
            <TouchableOpacity onPress={mostrarIndice}>
                <Text style={estilos.nombre}>
                    {nombre} 
                </Text>
                {convercionANumero()}
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        height:130,
        width:'100%',
        backgroundColor:'white',
        borderRadius:15,
        padding:15,
        justifyContent:'center',
        marginBottom:20,
        shadowColor: "#000000",
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        position:'relative'
    },nombre:{
        fontSize:25,
        color:'black'
    },valor:{
        fontSize:30,
        color:'#301E67',
        fontWeight:'800'
    },botonElminar:{
        height:40,
        width:40,
        backgroundColor:'#E7CBCB',
        position:'absolute',
        borderRadius:10,
        right:50, top:14,
        alignItems:'center',justifyContent:'center'
    }
})