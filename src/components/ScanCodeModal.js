import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import {
  View,
  Text,
  TextInput,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export function ScanCodeModal({ isVisible, onClose, onSave }) {
  const [newName, setNewName] = useState("");

  const handleSave = () => {
    onSave(newName);
    setNewName("");
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.containerContent}>
          <TouchableOpacity style={styles.buttonClose} onPress={onClose}>
            <Ionicons
              style={styles.icons}
              name="close"
              size={20}
              color="black"
            />
          </TouchableOpacity>

          <Text style={styles.title}>QRCode lido com sucesso!</Text>

          <TextInput
            value={newName}
            onChangeText={setNewName}
            placeholder="Insira nome da lista"
            style={styles.input}
          />

          <TouchableOpacity style={styles.buttonChange} onPress={handleSave}>
            <Text style={styles.textButton}>Criar lista </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 10,

    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  containerContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    width: "100%",
  },
  title: {
    backgroundColor: "#fff",
    paddingBottom: 20,
    borderRadius: 5,
    fontSize: 20,
    color: "#191D88",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  icons: {
    marginBottom: 30,
    textAlign: "right",
  },
  buttonChange: {
    backgroundColor: "#191D88",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 44,
    alignSelf: "center",
    marginVertical: 20,
  },
  textButton: {
    color: "white",
  },
});
