import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext, useState } from 'react'
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from '@/constants/Colors';
import Button from '@/components/Button';
import moment from 'moment';
import { CreateTripContext } from '@/context/CreateTripContext';
import { useRouter } from 'expo-router';


export default function SelectDates() {
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const router = useRouter()

  const onDateChange = (date: moment.MomentInput, type: string) => {
    if(type == 'START_DATE')
    {
      setStartDate(moment(date))
    }
    else{
      setEndDate(moment(date))
    }
  }
  
  const onContinueButtonClicked = () => {
    if(!startDate || !endDate)
      return;

    const numberOfDays = endDate.diff(startDate, 'days')
    setTripData({
      ...tripData,
      startDate: startDate,
      endDate : endDate,
      numberOfDays: numberOfDays + 1
    })
    console.log(tripData)
    router.push('/create-trip/select-budget')

  }

  
  return (
    <SafeAreaView>
      <View className="p-10 gap-5">

      <Text className="font-bold text-2xl">Select Dates</Text>
      <CalendarPicker 
      allowRangeSelection = {true}
      minDate={new Date()}
      maxRangeDuration={5}
      selectedRangeStyle = {{
        backgroundColor: Colors.Black
      }}
      selectedDayTextStyle= {{
        color: Colors.White
      }}
      onDateChange={onDateChange}
       />

      {
        startDate || endDate ?
        <Button type="fill" onPress={() => onContinueButtonClicked()}>Continue</Button>
        : <></>
      }
      </View>

    </SafeAreaView>
  )
}