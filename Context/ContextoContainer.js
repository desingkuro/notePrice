import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const contexto = createContext();

export function ContextoContainer({children}){

    const [ingresos,setIngresos]=useState([])
    const [gastos,setGastos]=useState([])
    const [presupuestos,setPresupuestos]=useState([])
    const [activoIngresos,setActivoIngresos]=useState(false)
    const [activoGastos,setActivoGastos]=useState(false)
    const [activoPresupuestos,setActivoPresupuesto]=useState(false)
    const [modalIngreso,setModalIngreso]=useState(false)
    const [nombre,setNombre]=useState('')
    const [valor,setValor]=useState('')

    useEffect(()=>{
        verificarIngresos()
        verificarGastos()
    },[ingresos,gastos])

    async function verificarIngresos(){
        try{
            const obtenidos = await AsyncStorage.getItem('Ingresos')
            if(obtenidos !== null){
                console.log('ingresos: '+ingresos)
                setActivoIngresos(true);
                const ingresosAntiguos = JSON.parse(obtenidos);
                setIngresos(ingresosAntiguos)
                console.log(ingresos)
            }else{
                setIngresos([])
                console.log('es nulo o 0')
            }
        }catch(error){
            console.log(error)
        }
    }
    async function verificarGastos(){
        try{
            const obtenidos = await AsyncStorage.getItem('Gastos')
            if(obtenidos !== null){
                console.log('Gastos: '+ gastos)
                setActivoGastos(true);
                const gastosAntiguos = JSON.parse(obtenidos);
                setGastos(gastosAntiguos)
                console.log(gastos)
            }else{
                setGastos([])
                console.log('es nulo o 0')
            }
        }catch(error){
            console.log(error)
        }
    }

    async function guardarIngresos(){
        try{
            const ingresosAGuardar = JSON.stringify(ingresos)
            await AsyncStorage.setItem('Ingresos',ingresosAGuardar)
        }catch(error){
            console.log(error)
        }
    }
    async function guardarGastos(){
        try{
            const gastosAGuardar = JSON.stringify(gastos)
            await AsyncStorage.setItem('Gastos',gastosAGuardar)
        }catch(error){
            console.log(error)
        }
    }
    
    return(
        <contexto.Provider value={{
            ingresos,setIngresos,gastos,setGastos,presupuestos,
            setPresupuestos,
            activoGastos,activoIngresos,activoPresupuestos,
            setActivoGastos,setActivoIngresos,setActivoPresupuesto,
            modalIngreso,setModalIngreso,
            nombre,setNombre,valor,setValor,
            guardarIngresos,guardarGastos}}>
            {children}
        </contexto.Provider>
    )
}