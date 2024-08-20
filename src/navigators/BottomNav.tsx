import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import TabBar from "../components/TabBar";
import Map from "~/screens/Map";
import Cart from "~/screens/Cart";
import Profile from "~/screens/Profile";
import Docs from "~/screens/Docs";

import Bike from "~/../assets/svgIcons/BottomNavIcons/Bicycle.svg";
import MapIcon from "~/../assets/svgIcons/BottomNavIcons/Map.svg";
import CartIcon from "~/../assets/svgIcons/BottomNavIcons/Cart.svg";
import ProfileIcon from "~/../assets/svgIcons/BottomNavIcons/Person.svg";
import DocsIcon from "~/../assets/svgIcons/BottomNavIcons/Doc.svg";
import { BottomTabParamList } from "~/lib/types";


const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomNav = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Bike name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MapIcon name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CartIcon name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Docs"
        component={Docs}
        options={{
          tabBarIcon: ({ color, size }) => (
            <DocsIcon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
