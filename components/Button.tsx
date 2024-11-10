import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps 
{
    children : React.ReactNode;
    onPress: () => void;
    
}

const Button = ({children, onPress} : CustomButtonProps) => {
  return (
    <TouchableOpacity
            onPress={() => onPress }
    className='p-4 border rounded-xl'>
        <Text className=' font-bold text-center'>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button