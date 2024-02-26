import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export function RecoverPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRecovered = () => {
    if (email === '') { 
      Alert.alert(
        "Eita!",
        "Precisamos que informe teu e-mail. Caso ainda não tenha um e-mail cadastrado no Listou, pode criar um Usuário agora, é super rápido!",
        [
          {
            text: "Voltar",
            onPress: () => {},
            style: 'default'
          },
          {
            text: "Criar Usuário",
            onPress: () => navigation.navigate('SignUp')
          }
        ]
      )
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } else {
     Alert.alert(
        "Agora sim!!!",
        "Conta recuperada com Sucesso!!! Pode curtir o Listou.",
        [
          {
            text: "Ok",
            onPress: () => navigation.navigate("Success"),
          },
        ]
      )
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Recuperar conta</Text>

        <Text style={styles.label}>Informe seu e-mail cadastrado na plataforma</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Informe uma nova senha</Text>
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
          <TouchableOpacity
            style={[styles.button, styles.seconderyButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.seconderyButtonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={handleRecovered}
          >
            <Text style={styles.buttonText}>Resgatar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerScroll: {
    backgroundColor: "#F5F9FF",
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#F5F9FF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 10,
    textAlign: "center",
    color: "#191D88",
  },
  input: {
    backgroundColor: "#C8FA96",
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  label: {
    color: "#303F5F",
    marginBottom: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 60,
    gap: 10,
  },
  button: {
    flex: 1,
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonPrimary: {
    backgroundColor: "#191D88",
  },
  seconderyButton: {
    borderWidth: 1,
    borderColor: "#191D88",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  seconderyButtonText: {
    color: "#191D88",
    textAlign: "center",
  },
});
