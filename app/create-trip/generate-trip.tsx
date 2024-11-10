import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function GenerateTrip() {
  return (
    <SafeAreaView>
      <View className='p-10'>
      <Text className='text-2xl font-bold'>Generate Trip</Text>
      <Text className='text-2xl font-bold'>Wait </Text>
      </View>
    </SafeAreaView>
  )
}