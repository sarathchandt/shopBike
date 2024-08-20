import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./BottomNav";
import SingleItemScreen from "~/screens/SingleItemScreen";
import ShopingCartScreen from "~/screens/ShopingCartScreen";
import { RootStackParamList } from "~/lib/types";


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tab" component={BottomNav} />
      <Stack.Screen name="singleItemScreen" component={SingleItemScreen} />
      <Stack.Screen name="shopingCartScreen" component={ShopingCartScreen} />
    </Stack.Navigator>
  );
};

export default RootNav;
