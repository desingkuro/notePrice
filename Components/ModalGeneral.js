import { View , Text ,StyleSheet, Modal, TextInput,TouchableOpacity, Alert} from "react-native";
import { contexto } from "../Context/ContextoContainer";
import { useContext } from "react";
import { ingresoClass } from "../class/IngresoClass";
import { gastosClass } from "../class/GastosClass";


export function ModalGeneral({screen}){
    const { modalIngreso,setModalIngreso,
            nombre,setNombre,valor,setValor,
            ingresos,setIngresos,guardarIngresos,
            setActivoGastos,setGastos,gastos,guardarGastos,setActivoIngresos
        } = useContext(contexto)

    function cerrarModal(){
        setModalIngreso(false)
    }
    function verificarInputs() {
        if (nombre.trim().length > 0 && valor.trim().length > 0) {
          return true;
        } else {
          return false;
        }
      }
      
    function guardarInformacion(){
        if(verificarInputs()){
            añadirInformacion()
        }else{
            console.log(screen)
            switch (screen) {
                case 'Ingreso':
                    Alert.alert('Debe llenar ambos campos para guardar el Ingreso')
                    break;
                case 'Gasto':
                    Alert.alert('Debe llenar ambos campos para guardar el Gasto')
                    break;
                case 'Presupuesto':
                    Alert.alert('Debe llenar ambos campos para guardar el Presupuesto')
                    break;
                default:
                    Alert.alert('Información erronea, ha sucedido un error')
                    break;
            }
        }
    }
    function resetInformacion(){
        setNombre('');
        setValor('');
    }
    function añadirInformacion(){
        switch (screen) {
            case 'Ingreso':
                const ingresoNuevo = new ingresoClass(nombre,valor)
                setIngresos([...ingresos, ingresoNuevo]);
                console.log('ingresos guardados'+JSON.stringify(ingresos));
                resetInformacion();
                guardarIngresos();
                cerrarModal();
                setActivoIngresos(true)
                break;
            case 'Gasto':
                const gastosNuevos = new gastosClass(nombre,valor);
                setGastos([...gastos,gastosNuevos]);
                console.log('gastos guardados'+JSON.stringify(gastos));
                resetInformacion();
                guardarGastos();
                cerrarModal();
                setActivoGastos(true)
                break;
            case 'Presupuesto':
                Alert.alert('Debe llenar ambos campos para guardar el Presupuesto')
                break;
            default:
                Alert.alert('Información erronea, ha sucedido un error')
                break;
        }
    }

    return(
        <Modal visible={modalIngreso}>
                <View style={estilos.containerModal}>
                    <Text style={estilos.tituloModal}>Nuevo {screen}</Text>
                    <Text style={estilos.tituloInput}>Titulo o descripción:</Text>
                    <TextInput
                        value={nombre}
                        style={estilos.inputText}
                        onChangeText={v=>{console.log(v);setNombre(v)}}
                    />
                    <Text style={estilos.tituloInput}>ingrese en monto:</Text>
                    <TextInput
                        style={estilos.inputText}
                        value={valor}
                        keyboardType="numeric"
                        onChangeText={v=>{console.log(v);setValor(v)}}
                    />
                    <TouchableOpacity style={estilos.botonGuardar} onPress={guardarInformacion}>
                        <Text style={estilos.textBoton}>Guardar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilos.botonCancelar} onPress={cerrarModal}>
                        <Text style={estilos.textBoton}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
    )
}

const estilos = StyleSheet.create({
    containerModal:{
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