import { useContext } from "react";
import { View, StyleSheet, ScrollView, Text, Image } from "react-native";
import { contexto } from "../Context/ContextoContainer";
import { Error404 } from "../Components/Error404";
import { Añadir } from "../Components/Añadir";
import { ModalGeneral } from "../Components/ModalGeneral";
import { Card } from "../Components/Card";


export function PresupuestoScreen({ navigation }) {
  const { Presupuestos, toggleModalPresupuesto } = useContext(contexto);

  function renderPresupuestos() {
    if (Presupuestos.length === 0) {
      return <Error404 mensaje={'presupuestos'} />;
    }
    return (
      <ScrollView style={style.containerPresupuestos}>
        {listarPresupuestos()}
      </ScrollView>
    );
  }

  function abrirVentana() {
    navigation.navigate('Detalles');
  }

  function listarPresupuestos() {
    return Presupuestos.map((elemento, index) => {
      return (
        <Card key={index} elemento={elemento} indice={index} funcion={abrirVentana} />
      );
    });
  }

  return (
    <View style={style.containerScreen}>
      {renderPresupuestos()}
      <Añadir accion={toggleModalPresupuesto} />
      <ModalGeneral />
    </View>
  );
}

const style = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: '#E3F4F4',
    paddingTop: 40,
  },
  containerPresupuestos: {
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
});


