import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import UserData from '../HomePage/UserData'
import ShowUserInfo from '../ShowUser/ShowUserInfo'
import {StyleSheet, Text, TouchableOpacity } from 'react-native'


const Bottom = createBottomTabNavigator()

const NavBottom = () => {
    const [mode, setMode] = useState(false)
    const ChangeMode = () => {
        setMode(!mode)
    }
    return (
        <NavigationContainer theme={mode ? DarkTheme : DefaultTheme}>
            <Bottom.Navigator
                screenOptions={{
                    headerRight: () => (
                        <TouchableOpacity style={styles.headerBtn} onPress={ChangeMode}>
                            <Text style={styles.headerBtnText}>{mode ? "Dark mode" : "Light Mode"}</Text>
                        </TouchableOpacity>
                    ),
                }}>
                <Bottom.Screen name='Home' component={UserData} />
                <Bottom.Screen name='Show' component={ShowUserInfo} />
            </Bottom.Navigator>
        </NavigationContainer>
    )
}
const styles = StyleSheet.create({
    headerBtn: {
      backgroundColor: 'green',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 8,
      marginRight:20
    },
    headerBtnText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  

export default NavBottom
