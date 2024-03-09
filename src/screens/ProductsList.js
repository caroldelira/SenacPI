import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import { CustomHeader } from '../components/CustomHeader';
import { ProductCard } from '../components/ProductCard';

const productsData = [
  { id: '1', name: 'Arroz de alguma marca outra marca', price: 'R$4,00', quantity: 3, totalPrice: 'R$12,00' },
  { id: '2', name: 'Arroz de alguma marca', price: 'R$4,00', quantity: 3, totalPrice: 'R$12,00' },
  { id: '3', name: 'Arroz de alguma marca', price: 'R$4,00', quantity: 3, totalPrice: 'R$12,00' },
  { id: '4', name: 'Arroz de alguma marca', price: 'R$4,00', quantity: 3, totalPrice: 'R$12,00' },
  { id: '5', name: 'Arroz de alguma marca', price: 'R$4,00', quantity: 3, totalPrice: 'R$12,00' },
  { id: '6', name: 'Arroz de alguma marca', price: 'R$4,00', quantity: 3, totalPrice: 'R$12,00' },
];

export function ProductsList({ navigation, route }) {

  const { name } = route.params;

  return (
    <View style={styles.container}>
    
      <CustomHeader back={() => navigation.goBack()} />

      <Text style={styles.title}>{name}</Text>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Todos os produtos')}>
            <Text style={styles.buttonText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Produtos faltantes')}>
            <Text style={styles.buttonText}>Faltantes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Produtos marcados')}>
            <Text style={styles.buttonText}>Carrinho</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitleAmount}>Valor dos itens R$ 893,46</Text>
      <Text style={styles.subtitleCardValue}>Valor dos itens no carrinho R$ 893,46</Text>
      
      <ScrollView style={styles.scrollView}>
      {productsData.map(item => (
        <ProductCard
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          amount={item.totalPrice}
        />
      ))}
      
      </ScrollView> 
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.buttonText}>+ Adicionar produto</Text>
      </TouchableOpacity>
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
  scrollView: {
    marginTop: 20,

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 10,
    textAlign: "center",
    color: "#191D88",
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'center',

    gap: 20,
  },
  button: {
    backgroundColor: '#76A24A',
    borderRadius: 5,
    padding: 10,
    width: '25%',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitleAmount: {
    fontSize: 18,
    color: '#191D88',
    textAlign: 'center',
  },
  subtitleCardValue: {
    fontSize: 18,
    color: '#76A24A',
    textAlign: 'center',
    marginTop: 10,
  },
  addButton: {
    backgroundColor: '#191D88',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 20,

    right: 10,
    alignSelf: 'flex-end',
    bottom: 10,
  },
});
