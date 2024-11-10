import { CreateTripContext } from "@/context/CreateTripContext";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const [tripData, setTripData] = useState<any>([]) 
  return (
    <CreateTripContext.Provider value={{tripData, setTripData}}>
    <Stack screenOptions={{headerShown: false }}>
      {/* <Stack.Screen name="index" /> */}
      <Stack.Screen name="(tabs)" />
    </Stack>
    </CreateTripContext.Provider>
  );
}
