import { Feather } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'


export default function SignIn() {
  const navigation = useNavigation(); 
    const router = useRouter();
    
useEffect(() => {
    navigation.setOptions({headerShown :false})
}, [])

    return (
    <SafeAreaView>
      <TouchableOpacity className='' onPress={() => router.back()}>
        <Feather className='p-4' name = "arrow-left" size={20}/>
      </TouchableOpacity>
      
      <View className='p-10 flex-col gap-5 justify-center h-full'>
        
        <View className='gap-5'>
        <Text className='text-4xl font-bold'>Let's Sign You In </Text>
        <Text className='text-2xl text-gray-500'>Welcome back</Text>
        <Text className='text-2xl text-gray-500'>You've been missed</Text>
        </View>

        <View className='flex-col gap-2'>
            <Text>Email</Text>
            <TextInput className='p-4 border shadow rounded-xl' placeholder='Enter Email' />
        </View>

        <View className='flex-col gap-2'>
            <Text>Password</Text>
            <TextInput secureTextEntry={true} className='p-4 border shadow rounded-xl' placeholder='Enter Password' />
        </View>

        <View className='mt-5 gap-5'>

        <View className='p-4 bg-black rounded-xl'>
            <Text className='text-white font-bold text-center'>Sign In</Text>
        </View>

        <TouchableOpacity
            onPress={() => router.replace("/auth/sign-up")}
        className='p-4 border rounded-xl'>
            <Text className=' font-bold text-center'>Create Account</Text>
        </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>
  )
}