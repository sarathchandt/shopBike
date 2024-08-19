import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
} from "react-native";
import tw from "~/lib/tailwind";
import GradientButton from "./GradientButton";

import All from "~/../assets/svgIcons/Filter/All.svg";
import Electric from "~/../assets/svgIcons/Filter/Batteryblock.svg";
import Road from "~/../assets/svgIcons/Filter/Road.svg";
import Mountain from "~/../assets/svgIcons/Filter/Mountain.svg";
import Helmet from "~/../assets/svgIcons/Filter/Hellmet.svg";

// icons aligned for two different designs
const Icons_1 = [All, Electric, Road];
const Icons_2 = [Mountain, Helmet];

const FilteringOptions = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>();

  const handlePress = (index: number) => {
    setSelectedIndex(index);
  };

//   checkSelected_1 and checkSelected_2 are functions that check if the button is selected or not
  const checkSelected_1 = (index: number) => {
    if (selectedIndex == index) {
      return {
        primaryColorArray: ["#53e1f5", "#46b2ee", "#2331e6"],
        secondaryColorArray: ["#37c1e9", "#3e92ed", "#4965f1"],
      };
    } else {
      return {
        primaryColorArray: ["#4d5362", "#2b3141", "#1b202a"],
        secondaryColorArray: ["#2d3648", "#2d3547", "#232835"],
      };
    }
  };

  const checkSelected_2 = (index: number) => {
    if (selectedIndex === index) {
      return {
        primaryColorArray: ["#53e1f5", "#46b2ee", "#2331e6"],
        secondaryColorArray: ["#37c1e9", "#3e92ed", "#4965f1"],
      };
    } else {
      return {
        primaryColorArray: ["#37587e", "#234268", "#223c5e"],
        secondaryColorArray: ["#2e4d73", "#2c4e77", "#294c74"],
      };
    }
  };

  return (
    <View
      style={[
        tw`w-full  flex-row justify-between pb-8   px-4`,
        { transform: [{ rotate: "-8deg" }] },
      ]}
    >
      {Icons_1.map((Icon, index) => {
        return (
          <TouchableOpacity
          onPress={()=>handlePress(index)}
            key={index+3}
            style={[tw` h-full `, { transform: [{ rotate: "8deg" }] }]}
          >
            <GradientButton
              Icon={Icon}
              primaryColorArray={checkSelected_1(index).primaryColorArray}
              secondaryColorArray={checkSelected_1(index).secondaryColorArray}
            />
          </TouchableOpacity>
        );
      })}
      {Icons_2.map((Icon, index) => {
        return (
          <TouchableOpacity
          onPress={()=>handlePress(index+3)}
            key={index+3}
            style={[tw` h-full `, { transform: [{ rotate: "8deg" }] }]}
          >
            <GradientButton
              Icon={Icon}
              primaryColorArray={checkSelected_2(index+3).primaryColorArray}
              secondaryColorArray={checkSelected_2(index+3).secondaryColorArray}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilteringOptions;
