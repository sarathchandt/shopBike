import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNav from './BottomNav';

const Stack = createNativeStackNavigator();

const RootNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    <Stack.Screen name="Tab" component={BottomNav} />

  </Stack.Navigator>
  )
}

export default RootNav