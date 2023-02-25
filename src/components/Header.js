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
  texto: {
    textAlign: 'center',
    paddingVertical: 20,
    marginTop: 20,
    color: '#FFF',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingTop: 10,
  },
});

export default Header;
