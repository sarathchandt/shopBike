import React from "react";
import { Text, View } from "react-native";
import tw from "~/lib/tailwind";
import SearchIcon from "~/../assets/svgIcons/BottomNavIcons/Search.svg";
import BlueGradientButton from "./GradientButton";

const Homeheader = ({ Icon }: any) => {
  return (
    <View style={tw` pt-10 `}>
      <View style={tw`flex-row justify-between px-4`}>
        <Text style={tw`text-white font-bold text-xl my-auto`}>
          Choose Your Bike
        </Text>
        <BlueGradientButton Icon={SearchIcon} />
      </View>

    </View>
  );
};

export default Homeheader;
