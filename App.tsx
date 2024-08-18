import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "~/navigators/RootNav";
import * as SplashScreen from "expo-splash-screen";
import { useDeviceContext } from 'twrnc';
import tw from "~/lib/tailwind";

SplashScreen.preventAutoHideAsync();


export default function App() {

  useDeviceContext(tw); 


  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);
  }, []);
 



  return (
    <SafeAreaView  style={tw`flex-1 `}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </SafeAreaView>
  );
}
