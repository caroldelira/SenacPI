import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/successIcon.png')} style={styles.logo} />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.title}>Tudo pronto!</Text>
        <Text style={styles.subtitle}>Comece já a</Text>
        <Text style={styles.subtitle}>economizar!</Text>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F9FF',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 70,
    marginTop: 100,
  },
  logo: {
    width: 220,
    height: 220,
  },
  containerText: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginBottom: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#191D88',
  },
  subtitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#121824',
  },
  containerButton: {
    alignItems: 'flex-end',
  },
    button: {
    backgroundColor: '#191D88',
    paddingVertical: 16,
    borderRadius: 5,
    width: '40%',
    marginTop: 80,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
