import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

export function LoginScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login com:', email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {handleLogin}}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => console.log('Esqueci minha senha')}>
          <Text style={styles.footerText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerText}>Não tenho cadastro</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    marginTop: 60,
    textAlign: 'left',
    color: '#191D88'
  },
  label: {
    color: '#303F5F',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#C8FA96',
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#191D88',
    marginTop: 160,
    paddingVertical: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerText: {
    color: '#303F5F',
    marginTop: 15,
    fontSize: 14,
  },
});
