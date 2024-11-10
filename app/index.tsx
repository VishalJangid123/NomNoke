import Login from "@/components/Login";
import { Text, View } from "react-native";
import "./../global"
import { Redirect } from "expo-router";

export default function Index() {
//  const user = null;
  return (
    <>
    <View className="">
    <Redirect href={"/mytrip"} />
    {/* {
      user ?
      <Redirect href={"/mytrip"} />
      <Login />
    } */}
    </View>
    </>
  );
}
