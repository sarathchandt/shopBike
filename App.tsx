import React  from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "~/navigators/RootNav";
import { useDeviceContext } from "twrnc";
import tw from "~/lib/tailwind";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import CustomeStatusBar from "./src/components/CustomeStatusBar";

export default function App() {
  useDeviceContext(tw);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>


    <CustomeStatusBar>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </CustomeStatusBar>
    </GestureHandlerRootView>
  );
}
