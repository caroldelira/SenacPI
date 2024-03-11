import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

import { CustomHeader } from "../components/CustomHeader";
import { createNewList } from "../services/lists";

export function CreateListScreen({ navigation }) {
  const [listName, setListName] = useState("");

  const handleCreateList = () => {
    if (listName === "") {
      Alert.alert("Ooops", "Inclua o nome da Lista para poder seguir.", [
        {
          text: "Ok",
          onPress: () => {},
          style: "default",
        },
      ]);
    } else {
      createNewList(listName)
        .then((response) => {
          if (response.status === "success") {
            Alert.alert("Parabéns", response.message, [
              {
                text: "Fechar",
              },
            ]);
            navigation.navigate("ProductsListScreen", { name: listName });
            setListName("");
          } else {
            Alert.alert("Ixi!", ret.message, [
              {
                text: "Voltar",
                onPress: () => {},
                style: "default",
              },
            ]);
          }
        })
        .catch((err) => {
          console.error("Erro ao criar uma nova lista:", err.message);
          Alert.alert("Erro", "Houve um erro ao criar uma nova lista.");
        });
    }
  };

  const handleReadQRCode = () => {
    navigation.navigate("QRcode");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomHeader back={() => navigation.goBack()} />

        <Text style={styles.title}>Criar nova lista</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira o nome da lista"
          value={listName}
          onChangeText={setListName}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={handleCreateList}>
            <Text style={styles.buttonText}>Criar lista</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>ou</Text>
        <Text style={styles.subtitle}>Importar lista</Text>
        <Text style={styles.description}>
          Você pode ler o QRCode de uma NF e criar uma lista a partir dela.
        </Text>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.buttonNF} onPress={handleReadQRCode}>
            <Text style={styles.buttonTextNF}>Ler NF via QRCode</Text>
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
    textAlign: "center",
    marginTop: 60,
  },
  containerButton: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#191D88",
    alignItems: "center",
    marginBottom: 16,
    width: "50%",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  buttonNF: {
    backgroundColor: "#C8FA96",
    alignItems: "center",
    marginBottom: 16,
    width: "50%",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  buttonTextNF: {
    color: "#191D88",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "#191D88",
    fontSize: 18,
    marginVertical: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#191D88",
    marginVertical: 20,
    textAlign: "center",
  },
  description: {
    color: "#303F5F",
    fontSize: 14,
    marginBottom: 36,
    paddingHorizontal: 46,
    textAlign: "center",
  },
});
