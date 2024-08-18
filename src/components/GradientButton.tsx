import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useWindowDimensions, View } from "react-native";
import tw from "~/lib/tailwind";

type GradientButtonProps = {
  Icon: any;
  primaryColorArray?: string[];
  secondaryColorArray?: string[];
};

const GradientButton = ({
  Icon,
  primaryColorArray = ["#53e1f5", "#46b2ee", "#2331e6"],
  secondaryColorArray = ["#37c1e9", "#3e92ed", "#4965f1"],
}: GradientButtonProps) => {

  const {width:WINDOW_WIDTH,height:WINDOW_HEIGHT} = useWindowDimensions()

  return (
    <View style={tw``} >
      <LinearGradient
        style={tw`p-[2px] rounded-[10px] overflow-hidden`}
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
          <View style={tw`w-[${WINDOW_WIDTH/15}px] h-[${WINDOW_WIDTH/15}px]`} >
          <Icon style={tw`m-auto`} />
          </View>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

export default GradientButton;
