import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Alert, View } from "react-native";


export const contexto = createContext();

export function ContextoContainer({children}){

    useEffect(()=>{
        comprobarPresupuestos();
    },[])

    async function comprobarPresupuestos(){
        const listado = await AsyncStorage.getItem('Presupuestos')
        try{
            if(listado.length === 0 || listado === null){
                return false
            }
            return true
        }catch(error){
            console.log(error)
        }
    }

    function toggleModalPresupuesto(){
        addPresupuesto ? setAddPresupuestos(false) : setAddPresupuestos(true)
    }

    function addNewPresupuesto(titulo, monto, fecha) {
        const newPresupuesto = {
          titulo: titulo,
          monto: monto,
          fecha: fecha,
          ingresos:[],
          gastos:[],
        };
        //Alert.alert(newPresupuesto.fecha)
        setPresupuestos(prevPresupuestos => [...prevPresupuestos, newPresupuesto]);
        guardarAsyncPresupuestos();
      }
      
    
    async function guardarAsyncPresupuestos(){
        const listaso = JSON.stringify(Presupuestos)
        AsyncStorage.setItem('Presupuestos',listaso)
    }

    function obtenerFechaActual() {
        const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1; // Los meses en JavaScript se indexan desde 0
        const anio = fechaActual.getFullYear();
      
        const fechaCompleta = dia +'/'+mes+'/'+anio
        return fechaCompleta
    }
    

    const[Presupuestos,setPresupuestos] = useState([]);
    const[addPresupuesto,setAddPresupuestos] = useState(false);
    const[vistaPresupuesto,setVistaPresupuestos] = useState(false);
    const[btnGastos,setBtnGastos] = useState(false);
    const[btnIngresos,setBtnIngresos] = useState(true);
    const[elementoSeleccionado,setElementoSeleccionado] = useState({});
    const[toggleModalIngresoGasto,setToggleModalIngresoGasto] = useState(false);
    const[categoriaSelect,setCategoriaSelect] = useState('');

    const[description,setDescription] = useState('');
    const[Valor,setValor] = useState('');
    

    
    
    return(
        <contexto.Provider value={{
            comprobarPresupuestos,Presupuestos,setPresupuestos,
            addPresupuesto,setAddPresupuestos,toggleModalPresupuesto,
            addNewPresupuesto,vistaPresupuesto,setVistaPresupuestos,
            elementoSeleccionado,setElementoSeleccionado,btnGastos,setBtnGastos
            ,btnIngresos,setBtnIngresos,toggleModalIngresoGasto,setToggleModalIngresoGasto,
            categoriaSelect,setCategoriaSelect,Valor,setValor,description,setDescription,
            obtenerFechaActual
        }}>
            {children}
        </contexto.Provider>
    )
}