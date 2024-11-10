import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ListOfTravelers } from '@/constants/Options'
import OptionCard from '@/components/OptionCard'
import { CreateTripContext } from '@/context/CreateTripContext';
import { router, useNavigation, useRouter } from 'expo-router';
import Button from '@/components/Button';
import { useRoute } from '@react-navigation/native';

export default function SelectTraveler() {
    const [selected, SetSelected ] = useState<any>();
    const { tripData, setTripData} = useContext(CreateTripContext);
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(()=> {
        navigation.setOptions({
            headerShown : true
        })
    }, []);

    useEffect(()=> {
        setTripData({...tripData, 
            travelerCount: selected
        })

    },[selected])

    useEffect(()=> {
        console.log(tripData)
    },[tripData])

    return (
    <SafeAreaView>
        <View className='p-10 gap-5'>
        <Text className='font-bold text-3xl'>Who's traveling</Text>
        <Text>
            Choose your category
        </Text>
        
        <FlatList
            data={ListOfTravelers}
            renderItem={({item , index}) => (
                    <TouchableOpacity
                    onPress={() => SetSelected(item)} className='mt-5'>
                    <OptionCard option={item} selected ={selected}/>
                    </TouchableOpacity>
            )}
            />
        <Button type="fill" onPress={()=> router.push('/create-trip/select-dates')}>Continue</Button>
        </View>
    </SafeAreaView>
  )
}