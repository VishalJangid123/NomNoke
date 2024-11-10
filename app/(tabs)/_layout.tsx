import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Feather } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
        headerShown : false,
        tabBarActiveTintColor: "#00000"
    }}
    
    >
        <Tabs.Screen name = 'mytrip' 
        options={{
            tabBarLabel: 'My Trips',
            tabBarIcon : ({color}) => <Feather name="map" size={20} color={color} />}}
        />
        <Tabs.Screen name = 'discover'
         options={{
            tabBarLabel: 'Discover',
            tabBarIcon : ({color}) => <Feather name="globe" size={20} color={color} />}}
        />
        <Tabs.Screen name = 'profile' 
         options={{
            tabBarLabel: 'Profile',
            tabBarIcon : ({color}) => <Feather name="user" size={20} color={color} />}}
        />
    </Tabs>
  )
}