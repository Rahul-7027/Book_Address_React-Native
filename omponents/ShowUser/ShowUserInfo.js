import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


const ShowUserInfo = () => {

  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false)
  const [currData, setCurrData] = useState(null)
  console.log("Data", data)

  const getData = async () => {
    const storedData = await AsyncStorage.getItem("book");
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setData(parsedData);
  }

  useEffect(() => {
    getData()
  }, [data])

  const handleDelete = async (email) => {
    const deleteData = data.filter((item) => item.email !== email)
    await AsyncStorage.setItem("book", JSON.stringify(deleteData))
    setData(deleteData)
  }


  const handledit = (item) => {
    setModal(true)
    setCurrData(item)
  }

  const handleSave = async () => {
    if (!currData || !currData.email) return;

    const updatedData = data.map((item) =>
      item.email === currData.email ? currData : item
    );

    await AsyncStorage.setItem("book", JSON.stringify(updatedData));
    setData(updatedData);
    setModal(false);
  };

  return (
    <View>
      {/* <Text style={{ textAlign: "center",fontSize:20,margin:20 }}>Show User Info</Text> */}

      {/* Table Header */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>Name</Text>
        <Text style={[styles.cell, styles.header]}>Email</Text>
        <Text style={[styles.cell, styles.header]}>Phone</Text>
        <Text style={[styles.cell, styles.header]}>Address</Text>
        <Text style={[styles.cell, styles.header]}>Action</Text>
      </View>



      <FlatList
        data={data}
        // keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row} key={item.email}>
            <Text style={styles.cell}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
            <Text style={styles.cell}>{item.email}</Text>
            <Text style={styles.cell}>{item.phone}</Text>
            <Text style={styles.cell}>{item.address}</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.editBtn} onPress={() => handledit(item)}>
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(item.email)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />


      <Modal
        visible={modal}
        transparent={true}
        animationType="slide"
      >
        {currData && (
          <View style={styles.userInfoBox}>
            <Text style={styles.infoLabel}>Name:</Text>
            <TextInput
              style={styles.infoValue}
              onChangeText={(text) =>
                setCurrData((prev) => ({ ...prev, name: text }))
              }
              value={currData.name}
            />

            <Text style={styles.infoLabel}>Email:</Text>
            <TextInput
              editable={false}
              style={[styles.infoValue, { backgroundColor: '#f0f0f0' }]}
              value={currData.email}
            />

            <Text style={styles.infoLabel}>Phone:</Text>
            <TextInput
              style={styles.infoValue}
              onChangeText={(text) =>
                setCurrData((prev) => ({ ...prev, phone: text }))
              }
              value={currData.phone}
            />

            <Text style={styles.infoLabel}>Address:</Text>
            <TextInput
              style={styles.infoValue}
              onChangeText={(text) =>
                setCurrData((prev) => ({ ...prev, address: text }))
              }
              value={currData.address}
            />

            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.editBtn} onPress={() => setModal(false)}>
                <Text style={styles.editText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteBtn} onPress={handleSave}>
                <Text style={styles.deleteText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>



    </View>
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


export default ShowUserInfo
