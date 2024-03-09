import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons'

import { OptionsMenu } from '../components/OptionsMenu';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';

export function HomeScreen({ navigation }) {

  const [lists, setLists] = useState([
    { id: '1', title: 'Lista 01', date: '14/12/2023' },
    { id: '2', title: 'Lista 02', date: '10/01/2024' },
  ]);

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
  
    const backgroundColor = item.id === selectedId ? '#C2F970' : '#FFFFFF';

    return (
      <View style={[styles.listItem, {backgroundColor}]}>
        <TouchableOpacity
          style={styles.containerContentList}
          onPress={() => {
            setSelectedId(item.id)
            navigation.navigate('ProductsListScreen', {name: item.title})
          }}
          onPressOut={() => setSelectedId(null)}
        >
          <Text style={styles.listItemText}>{item.title}</Text>
          <Text style={styles.listItemDate}>{item.date}</Text>

        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => {
            setIsOptionsVisible(true)
          }}
        >
          <Icon
            name="ellipsis-vertical-outline"
            size={26}
            color="#76A24A"
          />
        </TouchableOpacity>

      </View>
    )
  };
  

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Minhas listas</Text>
      <FlatList
        data={lists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <OptionsMenu
        visible={isOptionsVisible}
        onClose={() => setIsOptionsVisible(false)}
        onDelete={() => console.log('Excluir')}
        onRename={() => console.log('Renomear')}
        onShare={() => console.log('Compartilhar')}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ListScreen")}
      >
        <Text style={styles.buttonText}>+ Lista nova</Text>
      </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    color: '#191D88',
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  containerContentList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  listItemText: {
    color: '#303F5F',
  },
  listItemDate: {
    color: '#191D88',
    marginLeft: 160,
  },
  button: {
    backgroundColor: '#191D88',
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 44,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
