import { View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { CreateTripContext } from '@/context/CreateTripContext';

export default function SearchPlace() {
  const navigation = useNavigation();
const { tripData, setTripData} = useContext(CreateTripContext);
const router  = useRouter();  

useEffect(() => {
    navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle: "Search"

    })
  }, [])
  
    return (
    <SafeAreaView>
      <TextInput 
    //   onChangeText={
    //     setTripData({
    //     locationInfo : {
    //         // name: "Bangkok"
    //     }
    //   })}
      placeholder='Choose Location' />

    <TouchableOpacity onPress={() => router.push('/create-trip/select-traveler')}>
        <Text>Next</Text>
    </TouchableOpacity>
    </SafeAreaView>
  )
}