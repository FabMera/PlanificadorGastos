import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import globalStyles from '../styles';
import React from 'react';

const NuevoPresupuesto = ({
  handleNuevoPresupuesto,
  presupuesto,
  setPresupuesto,
}) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Definir Presupuesto</Text>
      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu Presupuesto: Ej:300"
        style={styles.input}
        value={presupuesto.toString()}
        onChangeText={setPresupuesto}
      />

      <Pressable
        style={styles.boton}
        onPress={() => handleNuevoPresupuesto(presupuesto)}>
        <Text style={styles.botonTexto}>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3B82F6',
  },
  boton: {
    marginTop: 30,
    backgroundColor: '#1048A4',
    padding: 10,
    borderRadius: 10,
  },
  botonTexto: {
    color: '#FFF',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
    color: '#000000',
  },
});

export default NuevoPresupuesto;
