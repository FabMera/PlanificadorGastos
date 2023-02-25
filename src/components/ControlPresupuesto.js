import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {formatearCantidad} from '../helpers';
import globalStyles from '../styles';

const ControlPresupuesto = ({presupuesto, gastos}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => Number(gasto.cantidad) + total,
      0,
    );
    const totalDisponible = presupuesto - totalGastado;
    setGastado(totalGastado);
    setDisponible(totalDisponible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.contenedor}>
      <View style={styles.centrarGrafica}>
        <Image style={styles.imagen} source={require('../img/grafico.jpg')} />
      </View>
      <View style={styles.contenedorTexto}>
        <Text style={styles.valor}>
          <Text style={styles.label}>Presupuesto:</Text>
          {presupuesto}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Disponible:</Text>
          {formatearCantidad(disponible)}
        </Text>
        <Text style={styles.valor}>
          <Text style={styles.label}>Gastado:</Text>
          {formatearCantidad(gastado)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  centrarGrafica: {alignItems: 'center'},
  imagen: {width: 250, height: 250},
  contenedorTexto: {marginTop: 50},
  valor: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000',
  },
  label: {fontWeight: '700', color: '#3B82F6'},
});

export default ControlPresupuesto;
