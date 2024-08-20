import React from "react";
import { Dimensions, Text, View } from "react-native";
import tw from "~/lib/tailwind";
import SearchIcon from "~/../assets/svgIcons/BottomNavIcons/Search.svg";
import BlueGradientButton from "./GradientButton";
const WINDOW_WIDTH =  Dimensions.get('window').width

const Homeheader = ({ Icon }: any) => {
  return (
    <View style={tw` pt-4 `}>
      <View style={tw`flex-row justify-between px-4`}>
        <Text style={tw`text-white font-bold text-xl my-auto`}>
          Choose Your Bike
        </Text>
        <BlueGradientButton width={WINDOW_WIDTH/20} height={WINDOW_WIDTH/20} Icon={SearchIcon} />
      </View>

    </View>
  );
};

export default Homeheader;
