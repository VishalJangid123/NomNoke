import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { router, useNavigation, useRouter } from 'expo-router';
import Button from '@/components/Button';
import { Feather } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/FirebaseConfig';

export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [fullName, setFullName] = useState<any>();

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])



  const OnCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, errorCode)
  });
  }


  return (
    <SafeAreaView>
      <TouchableOpacity className='' onPress={() => router.back()}>
        <Feather className='p-4' name = "arrow-left" size={20}/>
      </TouchableOpacity>
      
      <View className='p-10 flex-col gap-5 justify-center h-full'>
      
      <View className='gap-5'>
        <Text className='text-4xl font-bold'>New here! </Text>
        <Text className='text-2xl text-gray-500'>Let's create a new account</Text>
        {/* <Text className='text-2xl text-gray-500'></Text> */}
        </View>
      <View className='flex-col gap-2'>
          <Text>Full Name</Text>
          
          <TextInput 
          onChangeText={(value) => setFullName(value)}
          className='p-4 border shadow rounded-xl' placeholder='Enter Email' />
        </View>
        
        <View className='flex-col gap-2'>
          <Text>Email</Text>
          <TextInput 
          onChangeText={(value) => setEmail(value)}
          className='p-4 border shadow rounded-xl' placeholder='Enter Email' />
        </View>

        <View className='flex-col gap-2'>
          <Text>Password</Text>
          <TextInput 
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true} className='p-4 border shadow rounded-xl' placeholder='Enter Password' />
        </View>

        <View className='mt-5 gap-5'>

          
          <TouchableOpacity 
          onPress={() => OnCreateAccount()}
          className='p-4 bg-black rounded-xl'>
            <Text className='text-white font-bold text-center'>Create Account</Text>
          </TouchableOpacity>

        </View>
        <Button
          onPress={() => console.log("Sign up")}
        > Already registered! Sign in </Button>
        
        </View>
    </SafeAreaView>
  )
}