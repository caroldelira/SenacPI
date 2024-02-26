import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

export function SuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/successIcon.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.containerText}>
          <Text style={styles.title}>Tudo pronto!</Text>
          <Text style={styles.subtitle}>Comece já a</Text>
          <Text style={styles.subtitle}>economizar!</Text>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Navigation")}
        >
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
    padding: 20,
    backgroundColor: "#F5F9FF",
  },
  containerBody: {
    flex: 1,
    justifyContent: "space-evenly",
    height: "100%",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 220,
    height: 220,
  },
  containerText: {
    flexDirection: "column",
    justifyContent: "flex-start",
    textAlign: "left",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "#191D88",
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#121824",
  },
  containerButton: {
    alignItems: "flex-end",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#191D88",
    paddingVertical: 16,
    borderRadius: 5,
    width: "40%",
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
