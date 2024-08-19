import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, useWindowDimensions, View } from "react-native";
import tw from "~/lib/tailwind";

const WINDOW_WIDTH =  Dimensions.get('window').width

type GradientButtonProps = {
  Icon: any;
  primaryColorArray?: string[];
  secondaryColorArray?: string[];
  width?: number;
  height?: number;
};

const GradientButton = ({
  Icon,
  primaryColorArray = ["#53e1f5", "#46b2ee", "#2331e6"],
  secondaryColorArray = ["#37c1e9", "#3e92ed", "#4965f1"],
  width=WINDOW_WIDTH/15,
  height=WINDOW_WIDTH/15,
}: GradientButtonProps) => {


  return (
    <View style={tw``} >
      <LinearGradient
        style={tw`p-[1px] rounded-[10px] overflow-hidden`}
        colors={primaryColorArray}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.6, y: 1 }}
      >
        <LinearGradient
          style={tw`p-3 rounded-[10px] overflow-hidden`}
          colors={secondaryColorArray}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.6, y: 1 }}
        >
          <View style={tw`w-[${width}px] h-[${height}px]`} >
          <Icon style={tw`m-auto`} />
          </View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

export default GradientButton;
