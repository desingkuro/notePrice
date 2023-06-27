import { createStackNavigator } from "@react-navigation/stack";
import { PresupuestoScreen } from "../screens/PresupuestoScreen";
import { DetalleScreen } from "../screens/DetalleScreen";

export function StackNavigation() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="PresupuestoScreen"
          component={PresupuestoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detalles"
          component={DetalleScreen}
          options={() => ({
            title: "Detalle de Presupuesto",
          })}
        />
      </Stack.Navigator>
  );
}