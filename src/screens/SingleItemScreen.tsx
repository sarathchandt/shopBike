import React from "react";
import { Dimensions, View } from "react-native";
import ShopDetailsHeader from "~/components/ShopDetailsHeader";
import tw from "~/lib/tailwind";
import Triangle from "~/../assets/svgIcons/HomeIcons/BackGroundRectangle.svg";
import Animated, { FadeIn } from "react-native-reanimated";
const WINDOW_WIDTH =  Dimensions.get('window').width

const SingleItemScreen = ({ navigation }: any) => {
  return (
    <View style={tw`flex-1 bg-blue-100 pt-10 px-4 relative`}>
      <Animated.View entering={FadeIn.delay(500)} style={tw`absolute bottom-0 right-0 `}>
        <Triangle preserveAspectRatio="none" style={tw``} width={WINDOW_WIDTH} />
      </Animated.View>
      <ShopDetailsHeader  title="PEUGEOT - LR01" navigation={navigation} />
    </View>
  );
};

export default SingleItemScreen;
