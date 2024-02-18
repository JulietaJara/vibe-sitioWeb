import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';

const DropdownMenu = () => {
    const [modalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!modalVisible);
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModal}>
        <Image
          source={require('../images/icons8-menú-48.png')} 
          style={styles.buttonImage}
        />
        </TouchableOpacity>
  
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Productos</Text>
              <Text>Inicio</Text>
              <Text>Contacto</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Text style={styles.closeButton}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 20,
      marginTop: 74,
      
    },
    buttonText: {
      fontSize: 18,
      color: 'blue',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    closeButton: {
      marginTop: 10,
      fontSize: 16,
      color: 'red',
    },
  });
  
  export default DropdownMenu;
  