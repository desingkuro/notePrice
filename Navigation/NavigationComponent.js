import { createBottomTabNavigator, } from "@react-navigation/bottom-tabs";
import { GastosScreen } from "../screens/GastosScreen";
import { NavigationContainer } from "@react-navigation/native";
import { IngresoScreen } from "../screens/IngresoScreen";
import {PresupuestoScreen} from '../screens/PresupuestoScreen'
import {Configuracion} from '../screens/Configuracion';
import { StackNavigation } from "./StackNavigation";

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export function NavigationComponent(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Presupuesto">
                <Tab.Screen name="Presupuesto" component={StackNavigation} options={
                    {tabBarIcon:()=>{
                        return(
                            <MaterialCommunityIcons name="briefcase-edit" size={24} color="black" />
                        )
                    },headerShown: false}
                }/>
                <Tab.Screen name="Ingresos" component={IngresoScreen} options={
                    {tabBarIcon:()=>{
                        return(
                            <Ionicons name="bar-chart-outline" size={24} color="black"/>
                        )
                    },
                    headerShown: false }
                    
                }/>
                <Tab.Screen name="Gastos" component={GastosScreen} options={
                    {tabBarIcon:()=>{
                        return(
                            <FontAwesome5 name="coins" size={24} color="black" />
                        )
                    },headerShown: false}
                }/>
                <Tab.Screen name="Configuración" component={Configuracion} options={
                    {tabBarIcon:()=>{
                        return(
                            <MaterialIcons name="settings" size={24} color="black" />
                        )
                    }}
                }/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}