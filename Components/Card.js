import { View , Text, StyleSheet} from "react-native";

export function Card({nombre,valor}){
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
    return(
        <View style={estilos.container}>
            <Text style={estilos.nombre}>
                {nombre} 
            </Text>
            {convercionANumero()}
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
        elevation: 4
    },nombre:{
        fontSize:25,
        color:'black'
    },valor:{
        fontSize:30,
        color:'#301E67',
        fontWeight:'800'
    }
})