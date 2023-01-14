import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.texto}>Planificador de Gastos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {backgroundColor: '#3B82F6'},
  texto: {
    textAlign: 'center',
    paddingVertical: 30,
    color: '#FFF',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Header;
