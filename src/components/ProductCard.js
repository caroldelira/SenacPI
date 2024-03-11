import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function ProductCard({ id, name, price, quantity, amount, selected, onProductSelection }) {

  return (
    <View style={[styles.card, selected && styles.cardSelected]}>
      <TouchableOpacity 
        onPress={() => onProductSelection(id)}
      > 
        <View style={styles.headerCard}>
          <Text style={styles.checkbox}>{selected ? '✓' : ''}</Text>
          <Text style={styles.productName}>{name}</Text>
          <TouchableOpacity>
            <Ionicons style={styles.icons} name="create-outline" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons style={styles.icons} name="trash-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      
        <View style={styles.contentCard}>
          <Text style={styles.subtittle}>{quantity}x</Text>
          <Text style={styles.subtittle}>Unid. </Text>
          <Text style={styles.subtittle}>R$ {price}</Text>
          <Text style={styles.subtittle}>Total R$ {amount} </Text>
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
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  subtittle: {
    color: '#303F5F',
  },
  icons: {
    color: '#76A24A',
  }
});
