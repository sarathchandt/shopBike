import React from "react";
import { Pressable, View } from "react-native";
import tw from "~/lib/tailwind";
import BlueRect from "~/../assets/svgIcons/BottomNavIcons/RectangleBlue-cropped.svg";

type TabBarItemProps = {
  Icon: string;
  onPress: () => void;
  isFocused: boolean;
};

const TabBarItem = ({ Icon, onPress, isFocused }: TabBarItemProps) => {
  return (
    <View style={tw`w-2/10`}>
      {isFocused ? (
        <View style={tw`absolute top-0 left-0 right-0 bottom-0`}>
          <View style={tw`relative`}>
            <BlueRect
              width={60}
              height={60}
              style={tw`w-full mx-auto -mt-7 h-full`}
            />
            <View style={tw` h-full w-full absolute -mt-3.5`}>
              <View style={tw`mx-auto`}>
                <Icon />
              </View>
            </View>
          </View>
        </View>
      ) : (
        <Pressable style={tw` w-full `} onPress={onPress}>
          <View style={tw`mx-auto`}>
            <Icon />
          </View>
        </Pressable>
      )}
    </View>
  );
};

export default TabBarItem;
