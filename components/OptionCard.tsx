import { View, Text } from 'react-native'
import React from 'react'

export default function OptionCard({option, selected} : {option : any, selected : any}) {
    const cl = "border-2"
    return (
    
    <View className={`bg-gray-200 p-5 rounded-2xl flex-row justify-between ${selected?.id == option?.id ? cl : ''}`} >

      <View className='w-4/5 gap-2'>
      <Text className='font-bold text-2xl'>{option.title}</Text>
      <Text className='font-light text-gray-500'>{option.description}</Text>
      </View>
    
        <Text className='text-3xl'>{option.icon}</Text> 
    </View>
  )
}