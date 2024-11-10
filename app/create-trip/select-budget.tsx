import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { FlatList } from 'react-native'
import { BudgetOptions } from '@/constants/Options'
import OptionCard from '@/components/OptionCard'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'
import { CreateTripContext } from '@/context/CreateTripContext'

export default function SelectBudget() {
    const [selected, setSelected] = useState<any>()
    const router = useRouter();
    const { tripData, setTripData } = useContext(CreateTripContext)

    const onContinueClicked = () => {
        setTripData({
            ...tripData,
            budget: selected?.title
        })

        router.push('/create-trip/review-trip')
    }



    return (
        <SafeAreaView>
            <View className='p-10 gap-5 h-full'>

                <Text className='text-2xl font-bold'>Select Budget</Text>
                <FlatList

                    data={BudgetOptions}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => setSelected(item)}
                            className='mt-5'>
                            <OptionCard option={item} selected={selected} />
                        </TouchableOpacity>

                    )} />

                {
                    selected ?
                    <Button
                        type="fill" onPress={() => onContinueClicked()}>
                            Continue
                    </Button>
                    : <></>

                }
            </View>

        </SafeAreaView>
    )
}