import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export function CustomTabBar({ navigation }) {

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate('Home')}>
         <Icon name="home-outline" size={26} color={"#ffffff"} />
        <Text style={styles.textBar}>Início </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate('CalculatorScreen')}>
         <Icon name="calculator-outline" size={26} color={"#ffffff"} />
        <Text style={styles.textBar}>Calculadora </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate('Home')}>
         <Icon name="qr-code-outline" size={26} color={"#ffffff"} />
        <Text style={styles.textBar}>QRCode </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate('Home')}>
         <Icon name="bar-chart-outline" size={26} color={"#ffffff"} />
        <Text style={styles.textBar}>Relatórios </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#191D88',
    height: 65,
    paddingTop: 15,
    paddingHorizontal: 4,
  },
  tabButton: {
    alignItems: 'center',
  },
  textBar: {
    color: 'white',
    fontSize: 10,
    marginTop: 4,
    textAlign: 'center',
  }
});
