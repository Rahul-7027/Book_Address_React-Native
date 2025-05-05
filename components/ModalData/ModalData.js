import React from 'react'
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ModalData = (props) => {
    console.log("ModalData",props)
  return (
    <Modal
            visible={props.modal}
            transparent={true}
            animationType="slide"
          >
            {props.currData && (
              <View style={styles.userInfoBox}>
                <Text style={styles.infoLabel}>Name:</Text>
                <TextInput
                  style={styles.infoValue}
                  onChangeText={(text) =>
                    props.setCurrData((prev) => ({ ...prev, name: text }))
                  }
                  value={props.currData.name}
                />
    
                <Text style={styles.infoLabel}>Email:</Text>
                <TextInput
                  editable={false}
                  style={[styles.infoValue, { backgroundColor: '#f0f0f0' }]}
                  value={props.currData.email}
                />
    
                <Text style={styles.infoLabel}>Phone:</Text>
                <TextInput
                  style={styles.infoValue}
                  onChangeText={(text) =>
                    props.setCurrData((prev) => ({ ...prev, phone: text }))
                  }
                  value={props.currData.phone}
                />
    
                <Text style={styles.infoLabel}>Address:</Text>
                <TextInput
                  style={styles.infoValue}
                  onChangeText={(text) =>
                    props.setCurrData((prev) => ({ ...prev, address: text }))
                  }
                  value={props.currData.address}
                />
    
                <View style={styles.actionButtons}>
                  <TouchableOpacity style={styles.editBtn} onPress={() => setModal(false)}>
                    <Text style={styles.editText}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteBtn} onPress={props.handleSave}>
                    <Text style={styles.deleteText}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Modal>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f8f8',
    },
  
    userInfoBox: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 15,
      marginTop: 90,
      margin: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
  
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
      color: '#333',
    },
  
    infoLabel: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#333',
      marginTop: 10,
    },
  
    infoValue: {
      fontSize: 16,
      color: '#555',
      marginBottom: 10,
      borderWidth: 2,
      borderColor: '#ccc',
      borderRadius: 10,
      padding: 8,
    },
  
    modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    row: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#ddd',
      marginVertical: 5,
      borderRadius: 10,
      backgroundColor: '#fff',
      padding: 3,
    },
  
    headerRow: {
      backgroundColor: '#f1f1f1',
      borderBottomWidth: 2,
      borderColor: '#ccc',
    },
  
    cell: {
      flex: 1,
      textAlign: 'center',
      padding: 5,
      fontSize: 16,
      color: '#333',
    },
  
    headerCell: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#555',
    },
  
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 10,
    },
  
    editBtn: {
      backgroundColor: '#4CAF50',
      paddingVertical: 5,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginRight: 5,
    },
  
    editText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  
    deleteBtn: {
      backgroundColor: '#F44336',
      paddingVertical: 5,
      paddingHorizontal: 12,
      borderRadius: 8,
    },
  
    deleteText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
export default ModalData
