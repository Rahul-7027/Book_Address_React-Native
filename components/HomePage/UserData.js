import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTheme } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const UserData = () => {
    const { colors } = useTheme()
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    })


    const handleChange = (field, value) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        const storedData = JSON.parse(await AsyncStorage.getItem('book')) || [];
        const newData = [...storedData, data];
        await AsyncStorage.setItem('book', JSON.stringify(newData));

        setData({
            name: "",
            email: "",
            phone: "",
            address: ""
        });

        setData(newData);
    };


    return (
        <ScrollView>
            <View style={[styles.container, { backgroundColor: colors.background }]}>
                <Text style={[styles.text, { textAlign: "center" }, { color: colors.text }]}>Book - Address</Text>
                <View>
                    <Text style={[styles.text, { color: colors.text }]}>Enter Your Name</Text>
                    <TextInput value={data.name} style={[styles.textInput,
                    {
                        color: colors.text,
                        borderColor: colors.border || '#ccc',
                        backgroundColor: colors.card || 'white',
                    },]}
                        onChangeText={(text) => handleChange("name", text)} placeholder='Enter Your Name' placeholderTextColor={colors.text} />
                </View>
                <View>
                    <Text style={[styles.text, { color: colors.text }]}>Enter Your Email</Text>
                    <TextInput value={data.email}
                        style={[styles.textInput,
                        {
                            color: colors.text,
                            borderColor: colors.border || '#ccc',
                            backgroundColor: colors.card || 'white',
                        },]}
                        onChangeText={(text) => handleChange("email", text)} placeholder='Enter Your email'
                        placeholderTextColor={colors.text}
                    />
                </View>
                <View>
                    <Text style={[styles.text, { color: colors.text }]}>Enter Your Phone</Text>
                    <TextInput value={data.phone} style={[styles.textInput,
                    {
                        color: colors.text,
                        borderColor: colors.border || '#ccc',
                        backgroundColor: colors.card || 'white',
                    },]}
                        onChangeText={(text) => handleChange("phone", text)} placeholder='Enter Your phone'
                        placeholderTextColor={colors.text}
                    />
                </View>
                <View>
                    <Text style={[styles.text, { color: colors.text }]}>Enter Your Address</Text>
                    <TextInput value={data.address} style={[styles.textInput,
                    {
                        color: colors.text,
                        borderColor: colors.border || '#ccc',
                        backgroundColor: colors.card || 'white',
                    },]}
                        onChangeText={(text) => handleChange("address", text)} placeholder='Enter Your address'
                        placeholderTextColor={colors.text}
                    />
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.btn} >Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    text: {
        fontSize: 20,
        margin: 10
    },
    textInput: {
        borderWidth: 2,
        borderRadius: 20
    },
    btn: {
        textAlign: "center",
        borderRadius: 2, backgroundColor: "green",
        padding: 20,
        margin: 20,
        borderWidth: 2,
        borderRadius: 10
    }
})

export default UserData
