import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps 
{
    children : React.ReactNode;
    onPress: () => void;
    type: "fill" | "bordered"
}

const Button = ({children, onPress, type} : CustomButtonProps) => {
  const fill = "bg-black";
  const border = "border";
  return (
    <TouchableOpacity
            onPress={() => onPress() }
    className={`p-4  rounded-xl ${type == "fill" ? fill : border}`}>
        <Text className={`font-bold text-center
          ${type == "fill" ? "text-white" : "text-black"}
          `}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button