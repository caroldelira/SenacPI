import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    navigation.navigate("Success");
    console.log("Cadastro com:", name, email, password, confirmPassword);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Criar nova conta</Text>

        <Text style={styles.label}>Qual seu Nome?</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

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
          <TouchableOpacity
            style={[styles.button, styles.seconderyButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.seconderyButtonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonPrimary]}
            onPress={handleSignUp}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F9FF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 10,
    textAlign: "left",
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
