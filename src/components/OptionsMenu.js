import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export function OptionsMenu({ visible, onClose, onDelete, onRename, onShare }) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPressOut={onClose}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onDelete} style={styles.modalItem}>
            <Text style={styles.modalText}>Excluir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onRename} style={styles.modalItem}>
            <Text style={styles.modalText}>Renomear</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare} style={styles.modalItem}>
            <Text style={styles.modalText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  modalContent: {
    backgroundColor: '#F5F9FF',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%',
  },
  modalItem: {
    paddingVertical: 20,
  },
  modalText: {
    color: '#303F5F',
    textAlign: 'center',
  },
});
