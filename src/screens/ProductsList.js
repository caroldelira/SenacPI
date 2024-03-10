import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
} from "react-native";

import { CustomHeader } from "../components/CustomHeader";
import { ProductCard } from "../components/ProductCard";
import { CustomTabBar } from "../navigation/CustomTabBar";

export function ProductsList({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [productsData, setProductsData] = useState([
    {
      id: "1",
      name: "Arroz de alguma marca outra marca",
      price: "4.00",
      quantity: 3,
      amount: "12,00",
    },
    {
      id: "2",
      name: "Arroz de alguma marca",
      price: "4.00",
      quantity: 3,
      amount: "12,00",
    },
    {
      id: "3",
      name: "Arroz de alguma marca",
      price: "4.00",
      quantity: 3,
      amount: "12,00",
    },
  ]);

  const { name } = route.params;

  const handleAddProduct = () => {
    const totalAmount = (
      parseFloat(newProduct.price) * parseInt(newProduct.quantity)
    ).toFixed(2);

    setProductsData([
      ...productsData,
      { ...newProduct, amount: totalAmount, id: Date.now().toString() },
    ]);
    setNewProduct({ name: "", price: "", quantity: "" });
    setModalVisible(false);
  };

  return (
    <>
      <View style={styles.container}>
        <CustomHeader back={() => navigation.goBack()} />

        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.containerButton}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("Todos os produtos")}
            >
              <Text style={styles.buttonText}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("Produtos faltantes")}
            >
              <Text style={styles.buttonText}>Faltantes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("Produtos marcados")}
            >
              <Text style={styles.buttonText}>Carrinho</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitleAmount}>Valor dos itens R$ 893,46</Text>
          <Text style={styles.subtitleCardValue}>
            Valor dos itens no carrinho R$ 893,46
          </Text>

          {productsData.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              amount={item.amount}
            />
          ))}
        </ScrollView>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>+ Adicionar produto</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                style={styles.modalInput}
                placeholder="Insira o nome do Produto"
                value={newProduct.name}
                onChangeText={(text) =>
                  setNewProduct({ ...newProduct, name: text })
                }
              />
              <View style={styles.actionView}>
                <TextInput
                  style={styles.modalInputPrice}
                  placeholder="Preço"
                  value={newProduct.price}
                  onChangeText={(text) =>
                    setNewProduct({
                      ...newProduct,
                      price: text.replace(/[^0-9.]/g, ""),
                    })
                  }
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.modalInputQuant}
                  placeholder="Quant."
                  value={newProduct.quantity}
                  onChangeText={(text) =>
                    setNewProduct({
                      ...newProduct,
                      quantity: text.replace(/[^0-9.]/g, ""),
                    })
                  }
                  keyboardType="numeric"
                />
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleAddProduct}
                >
                  <Text style={styles.modalButtonText}>Adicionar </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <CustomTabBar navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#F5F9FF",
  },
  scrollView: {
    marginTop: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
    color: "#191D88",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "center",

    gap: 20,
  },
  button: {
    backgroundColor: "#76A24A",
    borderRadius: 5,
    padding: 10,
    width: "30%",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitleAmount: {
    fontSize: 18,
    color: "#191D88",
    textAlign: "center",
  },
  subtitleCardValue: {
    fontSize: 18,
    color: "#76A24A",
    textAlign: "center",
    marginTop: 10,
  },
  addButton: {
    backgroundColor: "#191D88",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 20,

    right: 10,
    alignSelf: "flex-end",
    top: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  modalInput: {
    width: "100%",
    backgroundColor: "#C8FA96",
    marginTop: 10,
    height: 48,
    borderRadius: 5,
    padding: 8,
  },
  modalInputPrice: {
    width: "35%",
    backgroundColor: "#C8FA96",
    marginTop: 10,
    height: 48,
    borderRadius: 5,
    padding: 8,
    textAlign: "center",
  },
  modalInputQuant: {
    width: "22%",
    backgroundColor: "#C8FA96",
    marginTop: 10,
    height: 48,
    borderRadius: 5,
    padding: 8,
    textAlign: "center",
  },
  actionView: {
    flexDirection: "row",
    width: "100%",
    gap: 10,
    justifyContent: "space-around",
  },
  modalButton: {
    width: "35%",
    backgroundColor: "#191D88",
    marginTop: 10,
    height: 48,
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButtonText: {
    color: "#FFFFFF",
  },
});
