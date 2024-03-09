import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CustomHeader } from '../components/CustomHeader';

export function CalculatorScreen({ navigation }) {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput('Erro');
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const backspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const buttons = [
    'C', '⌫', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=', 
  ];

  const getButtonStyle = (button) => {
  if (button === '=') {
    return styles.operationEqualButton; // Retorna o estilo para o botão de igual
  } else if (button === 'C') {
    return styles.operationCButton; // Retorna o estilo para o botão C
  } else if (['+', '-', '*', '/'].includes(button)) {
    return styles.operationButton; // Retorna o estilo para os botões de operação
  } else {
    return {}; // Retorna um objeto de estilo vazio para outros botões
  }
};

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <CustomHeader back={() => navigation.goBack()} />
      </View>
      <Text style={styles.input}>{input} </Text>
      <View style={styles.buttonsContainer}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button}
            style={[
                styles.button,
                getButtonStyle(button)
              ]}
            onPress={() => {
             if (button === 'C') {
                clearInput();
              } else if (button === '⌫') {
                backspace();
              } else if (button === '=') {
                calculateResult();
              } else {
                handlePress(button);
              }
            }}
          >
            <Text style={[styles.buttonText, getButtonStyle(button)]}>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    paddingTop: 60,
  },
  header: {
    paddingLeft: 20,
  },
  input: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 40,
  },
  result: {
    fontSize: 40,
    color: 'green',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  button: {
    width: '22%',
    margin: '1%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 28,
    color: '#191D88',
  },
  operationButton: {
    color: '#76A24A',
  },
  operationEqualButton: {
    backgroundColor: '#76A24A',
    color: '#ffffff',
  },
  operationCButton: {
    backgroundColor: '#9EACB4',
    color: '#ffffff',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#191D88',
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
