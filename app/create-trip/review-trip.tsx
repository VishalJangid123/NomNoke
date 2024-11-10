import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import { Feather } from '@expo/vector-icons'
import { CreateTripContext } from '@/context/CreateTripContext'
import moment from 'moment'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

export default function ReviewTrip() {
  const { tripData, setTripData } = useContext(CreateTripContext)
  const router = useRouter();
  
  const onBuildMyTripButtonClicked = () => {
    router.push('/create-trip/generate-trip')
  }  
  console.log(tripData)
    return (
    <SafeAreaView>
        <View className='p-10 gap-5 h-full'>

      <Text className='text-2xl font-bold'>ReviewTrip</Text>
        <Text className='font-semibold text-gray-500'>Before generating your trip, please review your selection</Text>

        <View className='flex-row gap-5 content-center items-center'>
            <Feather name='map' size={25} />
            <View>
                <Text className='font-normal text-sm text-gray-600'>Destination</Text>
                <Text className='font-bold text-xl'>{tripData.locationInfo}</Text>
            </View>
        </View>


        <View className='flex-row gap-5 content-center items-center'>
            <Feather name='map' size={25} />
            <View>
                <Text className='font-normal text-sm text-gray-600'>Travel Dates</Text>
                <Text className='font-bold text-xl'>
                    {moment(tripData?.startDate).format('DD MMM') + 
                    " To " + 
                    moment(tripData?.endDate).format('DD MMM')
                    + " (" + tripData?.numberOfDays + " days)"
                    }</Text>
            </View>
        </View>


        <View className='flex-row gap-5 content-center items-center'>
            <Feather name='map' size={25} />
            <View>
                <Text className='font-normal text-sm text-gray-600'>Who is traveling</Text>
                <Text className='font-bold text-xl'>
                    {tripData?.travelerCount.title}</Text>
            </View>
        </View>

        <View className='flex-row gap-5 content-center items-center'>
            <Feather name='map' size={25} />
            <View>
                <Text className='font-normal text-sm text-gray-600'>Budget</Text>
                <Text className='font-bold text-xl'>
                    {tripData?.budget}</Text>
            </View>
        </View>

            <Button type="fill" onPress={() => onBuildMyTripButtonClicked()}>Build My Trip</Button>
        </View>

    </SafeAreaView>
  )
}