import React from "react";
import { SafeAreaView } from "react-native";
import BottomNav from "./src/navigators/BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import tw from "./src/lib/tailwind"; // or, if no custom config: `from 'twrnc'`
import { useDeviceContext } from "twrnc";
import RootNav from "~/navigators/RootNav";
export default function App() {
  useDeviceContext(tw);
  return (
    <SafeAreaView style={tw`flex-1 bg-black `}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}
