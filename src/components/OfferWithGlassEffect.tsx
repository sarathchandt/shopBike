import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import Glass from "~/../assets/svgIcons/HomeIcons/GlassOffer.svg";
import tw from "~/lib/tailwind";

type OfferWithGlassEffectProps = {
  BikeIcon: any;
  offerPercent: number;
};

const OfferWithGlassEffect = ({
  BikeIcon,
  offerPercent,
}: OfferWithGlassEffectProps) => {
  const { height: WINDOW_HEIGHT, width: WINDOW_WIDTH } = useWindowDimensions();
  return (
    <View style={tw`w-full h-[${WINDOW_HEIGHT / 3}px] px-4 mt-6 relative`}>
      <Glass preserveAspectRatio="none" />
      <View style={tw`absolute top-0 h-full   left-4 right-4`}>
        <BikeIcon width={(WINDOW_WIDTH * 88) / 100} style={tw`m-auto `} />
      </View>
      <Text
        style={tw`text-2xl text-textWhite-100 font-bold absolute bottom-6 left-8`}
      >
        {offerPercent}% Off
      </Text>
    </View>
  );
};

export default OfferWithGlassEffect;
