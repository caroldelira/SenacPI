import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import api from "../services/api";

export function SignUpScreen({ navigation }) {
  const [name, setName] = useState("Alana");
  const [userName, setUserName] = useState("alana");
  const [email, setEmail] = useState("alana@email.com");
  const [password, setPassword] = useState("123");
  const [confirmPassword, setConfirmPassword] = useState("123");
  const [passwordChecked, setPasswordChecked] = useState(true);

  const [sending, setSending] = useState(false);

  const checkPassword = () => {
    return password !== "" && confirmPassword === password;
  };

  const canSignUp = () => {
    return (
      email !== "" &&
      name !== "" &&
      userName !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    );
  };

  const handleSignUp = () => {
    if (
      email === "" ||
      name === "" ||
      userName === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      Alert.alert("Opa Atenção!", "Precisamos que preencha todos os campos!", [
        {
          text: "Ok",
          onPress: () => {},
          style: "default",
        },
      ]);
    } else {
      requestSignUp(() => {
        setName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      });
    }
  };

  const requestSignUp = (onSignupSuccess) => {
    setSending(true);
    try {
      api
        .post("users", {
          name,
          username: userName,
          password,
          email,
        })
        .then((res) => {
          setSending(false);
          const ret = res.data;
          if (ret.status == "success") {
            Alert.alert("Parabéns", ret.message, [
              {
                text: "Fechar",
                onPress: () => navigation.navigate("Login"),
              },
            ]);
            onSignupSuccess();
            return;
          } else {
            Alert.alert("Ixi!", ret.message, [
              {
                text: "Voltar",
                onPress: () => {},
                style: "default",
              },
            ]);
            return;
          }
        })
        .finally(() => {});
    } catch {
      setSending(false);
    }
  };

  useEffect(() => {
    setPasswordChecked((previous) => {
      previous = checkPassword();
      return previous;
    });
  }, [password, confirmPassword]);

  useEffect(() => {
    console.log(passwordChecked);
  }, [passwordChecked]);

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Criar nova conta</Text>

        <Text style={styles.label}>Qual é o seu nome?</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>Qual será seu nome de Usuário?</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
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
        {!passwordChecked && (
          <Text style={styles.textPasswordValidate}>senhas não conferem</Text>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.seconderyButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.seconderyButtonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              canSignUp() ? styles.buttonPrimary : styles.buttonCanceled,
            ]}
            onPress={handleSignUp}
            disabled={sending || !canSignUp()}
          >
            {sending ? (
              <ActivityIndicator />
            ) : (
              <Text style={styles.buttonText}>Próximo</Text>
            )}
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
  buttonCanceled: {
    backgroundColor: "silver",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  seconderyButtonText: {
    color: "#191D88",
    textAlign: "center",
  },
  textPasswordValidate: {
    color: "red",
  },
});
