import React from "react";
import { View } from "react-native";
import tw from "~/lib/tailwind";
import TabBarItem from "./TabBarItem";
import BottomRectangle from "~/../assets/svgIcons/BottomNavIcons/Rectangle 24.svg";
const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={tw`  absolute bottom-0 w-full`}>
      <View style={tw`relative `}>
        <View style={tw` w-full  z-2 `}>
          <View style={tw`relative`}>
            <View
              style={[
                tw`bg-blue-200 h-full w-full -bottom-3 absolute`,
                { transform: [{ rotate: "-2.7deg" }] },
              ]}
            ></View>
            <BottomRectangle width={"100%"} preserveAspectRatio="none" />
          </View>
        </View>
        <View style={tw`absolute top-0 w-full  z-3`}>
          <View style={tw`flex-row justify-between  px-[17px] pt-[30px]`}>
            {state.routes.map((route: any, index: number) => {
              const { options } = descriptors[route.key];
              const Icon = options.tabBarIcon;
              const isFocused = state.index === index;

              const onPress = () => {
                // return;
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              };

              return (
                <TabBarItem
                  key={index}
                  onPress={onPress}
                  isFocused={isFocused}
                  Icon={Icon}
                />
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default TabBar;
