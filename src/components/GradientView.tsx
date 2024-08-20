import { LinearGradient } from "expo-linear-gradient";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import tw from "~/lib/tailwind";

type GradientViewProps = {
  primaryColorArray?: string[];
  secondaryColorArray?: string[];
  roundeness?: string;
};

const GradientView: React.FC<PropsWithChildren<GradientViewProps>> = ({
    children,
  primaryColorArray = ["#53e1f5", "#46b2ee", "#2331e6"],
  secondaryColorArray = ["#37c1e9", "#3e92ed", "#4965f1"],
  roundeness = "[10px]",
}) => {
  return (
    <View style={tw``}>
      <LinearGradient
        style={tw`p-[1px] rounded-${roundeness} overflow-hidden`}
        colors={primaryColorArray}
        start={{ x: 0.7, y: 0 }}
        end={{ x: 0.8, y: 1 }}
      >
        <LinearGradient
          style={tw` rounded-${roundeness} overflow-hidden`}
          colors={secondaryColorArray}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
            {children}
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

export default GradientView;
