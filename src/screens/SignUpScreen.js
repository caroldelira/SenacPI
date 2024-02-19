import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

export function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    navigation.navigate('Success')
    console.log('Cadastro com:', name, email, password, confirmPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar nova conta</Text>

      <Text style={styles.label}>Qual seu Nome?</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Seu e-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Escolha uma senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.label}>Repita a senha</Text>
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.seconderyButton} onPress={() => navigation.goBack()} >
          <Text style={styles.seconderyButtonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp} >
          <Text style={styles.buttonText}>Próximo.</Text>
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
  input: {
    backgroundColor: '#C8FA96',
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
    label: {
    color: '#303F5F',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
  },
    button: {
    backgroundColor: '#191D88',
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 5,
  },
  seconderyButton: {
    borderWidth: 1,
    borderColor: '#191D88',
    marginTop: 10,
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 5, 
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  seconderyButtonText: {
    color: '#191D88',
    textAlign: 'center',
  },
});
