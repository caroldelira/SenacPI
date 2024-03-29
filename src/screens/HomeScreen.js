import React, { useEffect, useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";

import { OptionsMenu } from "../components/OptionsMenu";
import { EditListNameModal } from "../components/EditListModal";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import api from "../services/api";
import { formatDateShortPT } from "../utils/dateUtil";
import { deleteList, updateList } from "../services/lists";

export function HomeScreen({ navigation }) {
  const [lists, setLists] = useState([]);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [sending, setSending] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const requestListas = async () => {
    setSending(true);
    try {
      api
        .get("listas/")
        .then((res) => {
          const ret = res.data;
          console.log("listas", ret);
          setLists(ret);
        })
        .finally(() => {
          setSending(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestListas();
  }, []);

  useEffect(() => {
    return () => setSelectedId(null);
  }, []);

  const handleDeleteList = (listId) => {
    const nameList = lists.find((list) => list.id === listId);

    Alert.alert(
      "Confirmar exclusão",
      `Você deseja realmente excluir a lista: ${nameList.title} ?`,
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: async () => {
            setSending(true);
            try {
              const responseMessage = await deleteList(listId);
              Alert.alert("Parabéns", responseMessage, [
                {
                  text: "Fechar",
                },
              ]);
            } catch (err) {
              console.log(err.message);
              Alert.alert("Erro", "Houve um erro ao excluir a lista.");
            } finally {
              setSending(false);
              setIsOptionsVisible(false);
            }
          },
        },
      ]
    );
  };

  const handleShareList = () => {
    return Alert.alert(
      "Opa!!",
      "Ainda não ativamos essa funcionalidade. Mas, já já vai estar tudo certinho pra você compartilhar com quem quiser!!",
      [
        {
          text: "Fechar",
        },
      ]
    );
  };

  const handleUpdateLists = async (novoNome) => {
    try {
      await updateList(selectedId, novoNome);
      Alert.alert("Sucesso!", "Nome da lista atualizado com sucesso", [
        {
          text: "Fechar",
        },
      ]);
      setIsModalVisible(false);
    } catch (err) {
      console.log(err.message);
      Alert.alert("Erro", "Houve um erro ao atualizar o nome da lista.");
    } finally {
      setSending(false);
      setIsOptionsVisible(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#C2F970" : "#FFFFFF";

    return (
      <View style={[styles.listItem, { backgroundColor }]}>
        <TouchableOpacity
          style={styles.containerContentList}
          onPress={() => {
            setSelectedId(item.id);
            navigation.navigate("ProductsListScreen", { name: item.title });
          }}
          onPressOut={() => {
            if (!isOptionsVisible) {
              setSelectedId(null);
            }
          }}
        >
          <View>
            <Text style={styles.listItemText}>{item.title}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.listItemDate}>
              {formatDateShortPT(item.date)}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsOptionsVisible(true);
                setSelectedId(item.id);
              }}
            >
              <Icon
                name="ellipsis-vertical-outline"
                size={26}
                color="#76A24A"
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas listas</Text>
      <FlatList
        data={lists}
        renderItem={({ item }) =>
          renderItem({ item, selectedId, setSelectedId })
        }
        keyExtractor={(item) => item.id}
      />

      <OptionsMenu
        visible={isOptionsVisible}
        onClose={() => setIsOptionsVisible(false)}
        onDelete={() => {
          handleDeleteList(selectedId);
        }}
        onRename={() => {
          setIsModalVisible(true);
          setIsOptionsVisible(false);
        }}
        onShare={handleShareList}
      />

      <EditListNameModal
        isVisible={isModalVisible}
        onSave={handleUpdateLists}
        onClose={handleCloseModal}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => requestListas()}>
          <Text style={styles.buttonText}>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ListScreen")}
        >
          <Text style={styles.buttonText}>+ Lista nova</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    color: "#191D88",
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  containerContentList: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listItem: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  listItemText: {
    color: "#303F5F",
    // width: "100%",
  },
  listItemDate: {
    color: "#191D88",
  },
  buttonContainer: {
    // flex: 1,
    // width: "100%",
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    // alignSelf: "flex-end",
    marginHorizontal: 20,
    // marginVertical: 20,
  },
  button: {
    width: "45%",
    backgroundColor: "#191D88",
    borderRadius: 6,
    paddingVertical: 14,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
