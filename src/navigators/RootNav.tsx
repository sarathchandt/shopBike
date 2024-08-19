import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./BottomNav";
import SingleItemScreen from "~/screens/SingleItemScreen";


const Stack = createNativeStackNavigator();

const RootNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={BottomNav} />
      <Stack.Screen name="singleItemScreen" component={SingleItemScreen} />
    </Stack.Navigator>
  );
};

export default RootNav;
