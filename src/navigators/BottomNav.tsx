import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import TabBar from '../components/TabBar';
import Temp from '../screens/Temp';
const Tab = createBottomTabNavigator();



const BottomNav = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props}  />} screenOptions={{headerShown:false}} >
      <Tab.Screen name="Home" component={Home}   />
      <Tab.Screen name="Temp" component={Temp} />

    </Tab.Navigator>
  )
}

export default BottomNav