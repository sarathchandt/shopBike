import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import tw from "~/lib/tailwind";
import BackIcon from "~/../assets/svgIcons/ShopDetails/BackButton.svg";
import DownIcon from "~/../assets/svgIcons/ShopDetails/Down.svg";
import GradientButton from "./GradientButton";

type ShopDetailsHeaderProps = {
  onpress: any;
  title: string;
  isBottomSheetOpen: boolean;
};
const WINDOW_WIDTH = Dimensions.get("window").width;

const ShopDetailsHeader = ({
  onpress,
  title,
  isBottomSheetOpen,
}: ShopDetailsHeaderProps) => {
  return (
    <View style={tw`flex-row `}>
      <TouchableOpacity style={[tw`w-3/12 flex-row `]} onPress={onpress}>
        <View>
          <GradientButton
            width={WINDOW_WIDTH / 20}
            height={WINDOW_WIDTH / 20}
            Icon={isBottomSheetOpen ? DownIcon : BackIcon}
          />
        </View>
      </TouchableOpacity>
      <View style={tw`w-6/12`}>
        <Text style={tw`font-bold text-xl text-textWhite-100 mx-auto my-auto`}>
          {title}
        </Text>
      </View>
      <View style={tw`w-3/12`}></View>
    </View>
  );
};

export default ShopDetailsHeader;
