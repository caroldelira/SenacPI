import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function ProductCard({ name, price, quantity, amount }) {

  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={[styles.card, isSelected && styles.cardSelected]}>
      <TouchableOpacity 
        onPress={() => setIsSelected(!isSelected)}
      > 
        <View style={styles.headerCard}>
          <Text style={styles.checkbox}>{isSelected ? '✓' : ''}</Text>
          <Text style={styles.productName}>{name}</Text>
          <TouchableOpacity>
            <Ionicons style={styles.icons} name="create-outline" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons style={styles.icons} name="trash-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      
        <View style={styles.contentCard}>
          <Text style={styles.productQuant}>{quantity}x</Text>
          <Text style={styles.subtittle}>Unid. </Text>
        <Text style={styles.productPrice}>{price}</Text>
        <Text style={styles.subtittle}>Total </Text>
          <Text style={styles.productAmout}>{amount}</Text>
        </View>
        
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 10,
    marginTop: 10,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  checkbox: {
    color: '#76A24A',
    fontSize: 16,
    width: 14,
  },
  cardSelected: {
    backgroundColor: '#C8FA96', // Muda a cor de fundo quando selecionado
  },
  productName: {
    color: '#303F5F',
    width: 200,
  },
  headerCard: {
    flex: 1,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentCard: {
    flex: 1,
    paddingHorizontal: 40,
    gap: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  icons: {
    color: '#76A24A',
  }
});
