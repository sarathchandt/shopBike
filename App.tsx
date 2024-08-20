import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "~/navigators/RootNav";
import * as SplashScreen from "expo-splash-screen";
import { useDeviceContext } from "twrnc";
import tw from "~/lib/tailwind";

import CustomeStatusBar from "./src/components/CustomeStatusBar";

export default function App() {
  useDeviceContext(tw);

  return (
    <CustomeStatusBar>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </CustomeStatusBar>
  );
}
