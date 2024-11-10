import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const StartNewTripCard = () => {
  const router = useRouter();
  
    return (
    <View className='flex mt-10 justify-center gap-7 p-10'>
      <Text className='font-semibold text-center'>No trips planned yet.</Text>
      <Text className='font-base text-gray-500 text-center'>Looks like its time to plan a new travel experience. Get started below</Text>
      <TouchableOpacity 
      onPress={() => router.push('/create-trip/search-place')}
      className='bg-black p-5 rounded-xl'>
        <Text className='text-white text-center font-bold'>Start a new trip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartNewTripCard