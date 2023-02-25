import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import globalStyles from '../styles';

const FormularioGasto = ({setModal, handleGasto}) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');

  return (
    <View style={styles.contenedor}>
      <View>
        <Pressable
          style={styles.btnCancelar}
          onLongPress={() => setModal(false)}>
          <Text style={styles.btnCancelarTexto}>Cancelar</Text>
        </Pressable>
      </View>

      <View style={styles.formulario}>
        <Text style={styles.titulo}>Nuevo Gasto</Text>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del Gasto,Ej;Comida"
            value={nombre}
            onChangeText={setNombre}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Cantidad Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad del Gasto,Ej;300"
            keyboardType="numeric"
            value={cantidad}
            onChangeText={setCantidad}
          />
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Categoria Gasto</Text>
          <Picker
            selectedValue={categoria}
            onValueChange={itemValue => {
              setCategoria(itemValue);
            }}>
            <Picker.Item label="-- Seleccione --" value="" />
            <Picker.Item label="-- Ahorro --" value="ahorro" />
            <Picker.Item label="-- Comida --" value="comida" />
            <Picker.Item label="-- Casa --" value="casa" />
            <Picker.Item label="-- Gastos Varios --" value="gastosvarios" />
            <Picker.Item label="-- Salud --" value="ahorro" />
            <Picker.Item label="-- Suscripciones --" value="ahorro" />
          </Picker>
        </View>
        <Pressable
          style={styles.submitBtn}
          onPress={() => handleGasto({nombre, cantidad, categoria})}>
          <Text style={styles.submitBtnTexto}>Agregar Gasto</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contenedor: {backgroundColor: '#1E40AF', flex: 1},
  formulario: {...globalStyles.contenedor},
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 30,
    color: '#64748B',
  },
  campo: {marginVertical: 10},
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitBtn: {backgroundColor: '#3B82F6', padding: 10, marginTop: 20},
  submitBtnTexto: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  btnCancelar: {
    backgroundColor: '#DB2777',
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
  },
  btnCancelarTexto: {textTransform: 'uppercase'},
});
export default FormularioGasto;
