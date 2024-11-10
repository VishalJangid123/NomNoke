import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native'

export default function Login() {
    const navigation = useNavigation();
    
    useEffect(() => {
        navigation.setOptions({headerShown :false})
    }) 
    const router = useRouter();
    return (
    <View className='bg-white flex flex-col h-full'>
      <Image source={require('../assets/images/loginBanner.webp')} 
        className='h-2/3 w-full'
      />
      <View className='bg-white rounded-3xl mt-[-20] flex flex-col justify-center content-center p-10 gap-3'>

      <Text className="text-3xl font-bold text-center" >NomNoke</Text>
      <Text className="text-xs font-light text-gray-400 text-center leading-loose" >Ready to say goodbye to boring trips and hello to epic adventures? Let’s turn your ‘someday’ into ‘today’—adventure’s waiting, no packing required!</Text>
      
      <TouchableOpacity 
        onPress={() => router.push('/auth/sign-in')}
      className='bg-black p-3 rounded-xl mt-5'>
        <Text className='text-white font-semibold text-xl text-center'>Get Started</Text>
      </TouchableOpacity>

      </View>
    </View>
  )
}