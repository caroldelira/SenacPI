import React, { useEffect, useState } from "react";
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
  const [totalAmount, setTotalAmount] = useState(47.40);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filter, setFilter] = useState('todos');
  const [filteredList, setFilteredList] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [productsData, setProductsData] = useState([
    {
      id: "1",
      name: "Arroz Tio João",
      price: "5.60",
      quantity: 3,
      amount: "16.80",
    },
    {
      id: "2",
      name: "Feijão Preto Fortaleza",
      price: "9.30",
      quantity: 2,
      amount: "18.60",
    },
    {
      id: "3",
      name: "Açucar Cristal",
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
    setTotalAmount((previous) => previous + parseFloat(totalAmount));
    setNewProduct({ name: "", price: "", quantity: "" });
    setModalVisible(false);
  };

  const handleProductSelection = (productId) => {  

    const isSelected = selectedProducts.includes(productId);
  
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
    
  };

  useEffect(() => {
    filterByChecked(); 
  }, [filter]);

  const calculateCartAmount = () => {
    let totalAmount = 0.00;
    productsData.forEach((product) => {
      if (selectedProducts.includes(product.id)) {
        totalAmount += parseFloat(product.amount);
      }
    });
    return totalAmount.toFixed(2);
  };

  const filterByChecked = () => {

    if (filter ===  'marcados') {
      const filteredList = productsData.filter((product) => selectedProducts.includes(product.id));
      return setFilteredList(filteredList);
      
    } else if ( filter === 'faltantes') {
      const filteredList = productsData.filter((product) => !selectedProducts.includes(product.id));
      return setFilteredList(filteredList);
    } 
  };


  return (
    <>
      <View style={styles.container}>
        <CustomHeader back={() => navigation.goBack()} />

        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>{name}</Text>

          <View style={styles.containerButton}>
            <TouchableOpacity
              style={filter === 'todos' ? styles.buttonActive : styles.button}
              onPress={() => {
                setFilter('todos');
              }}
            >
              <Text style={filter === 'todos' ? styles.buttonTextActive : styles.buttonText}>Todos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={filter === 'faltantes' ? styles.buttonActive : styles.button}
              onPress={() => {
                setFilter('faltantes');
              }}
            >
              <Text style={filter === 'faltantes' ? styles.buttonTextActive : styles.buttonText}>Faltantes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={filter === 'marcados' ? styles.buttonActive : styles.button}
              onPress={() => {
                setFilter('marcados');
                filterByChecked();
              }}
            >
              <Text style={filter === 'marcados' ? styles.buttonTextActive : styles.buttonText}>Carrinho</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitleAmount}>Valor dos itens R$ {(totalAmount).toFixed(2)}</Text>
          <Text style={styles.subtitleCardValue}>
            Valor dos itens no carrinho R$ {calculateCartAmount()}
          </Text>

          {filter !== 'todos' && filteredList.length > 0 ? filteredList.map((item) => (
             <ProductCard
             key={item.id}
             id={item.id}
             name={item.name}
             price={item.price}
             quantity={item.quantity}
             amount={item.amount}
             selected={selectedProducts.includes(item.id)}
             onProductSelection={handleProductSelection}
           />
          )) : productsData.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              amount={item.amount}
              selected={selectedProducts.includes(item.id)}
              onProductSelection={handleProductSelection}
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
    marginBottom: 20,
    marginTop: 20,
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
  buttonActive: {
    backgroundColor: "#C8FA96",
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
  buttonTextActive: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#191D88",
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
    marginBottom: 10,
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
