import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import StartNewTripCard from '@/components/StartNewTripCard'

export default function MyTrip() {
  return (
    <SafeAreaView>
    <View className='p-10'>

        <View className='flex-row justify-between content-center items-center'>
            <Text className='text-4xl font-bold '>My Trips</Text>
            <TouchableOpacity className=''>
                <Feather name="plus" size={25} />
            </TouchableOpacity>
        </View>

        <StartNewTripCard />


    </View>
    </SafeAreaView>
  )
}