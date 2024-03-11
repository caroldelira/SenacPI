import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import api from "../services/api";

export function LoginScreen({ navigation }) {
  const [user, setUser] = useState("listou");
  const [password, setPassword] = useState("123");
  const [sending, setSending] = useState(false);

  const handleLoginButton = () => {
    if (user === "") {
      Alert.alert(
        "Eita!",
        "Precisamos identificar um usuário. Por favor informa um ou pode criar agora caso ainda não tenha, é super rápido.!",
        [
          {
            text: "Voltar",
            onPress: () => {},
            style: "default",
          },
          {
            text: "Criar Usuário",
            onPress: () => navigation.navigate("SignUp"),
          },
        ]
      );
      return;
    }

    if (password === "") {
      Alert.alert("Oxe!", "Tu esqueceu de colocar a senha.", [
        {
          text: "Voltar",
          onPress: () => {},
          style: "default",
        },
      ]);
      return;
    }

    requestLogin();
  };

  const requestLogin = () => {
    setSending(true);
    try {
      api
        .get(`users/${user}`)
        .then((res) => {
          setSending(false);
          const ret = res.data;
          if (ret.length == 0) {
            Alert.alert(
              "Ooops",
              "Parece que você ainda não tem esse usuário cadastrado no Listou, cadastre agora e aproveite todos os benefícios do seu Listou",
              [
                {
                  text: "Cancelar",
                  onPress: () => {},
                  style: "cancel",
                },
                {
                  text: "Criar Usuário",
                  onPress: () => navigation.navigate("SignUp"),
                },
              ]
            );
            return;
          }

          const usr = ret[0];
          console.log(usr);

          if (usr.password !== password) {
            Alert.alert("Ixi!", "Tu errou a senha.", [
              {
                text: "Voltar",
                onPress: () => {},
                style: "default",
              },
            ]);
            return;
          }

          if (
            usr.username === user.toLowerCase().trim() &&
            usr.password === password
          ) {
            // setUser("");
            // setPassword("");
            navigation.navigate("Success");
          }
        })
        .finally(() => {});
    } catch {
      setSending(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Usuário</Text>
      <TextInput
        style={styles.input}
        value={user}
        onChangeText={setUser}
        keyboardType="name-phone-pad"
        autoCapitalize="none"
      />
      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
        {sending ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate("Recover")}>
          <Text style={styles.footerText}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.footerText}>Não tenho cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  label: {
    color: "#303F5F",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#C8FA96",
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#191D88",
    marginTop: 60,
    paddingVertical: 16,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  footer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  footerText: {
    color: "#303F5F",
    marginTop: 15,
    fontSize: 14,
  },
});
