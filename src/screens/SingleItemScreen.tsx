import React, { useRef } from "react";
import { Dimensions, View } from "react-native";
import ShopDetailsHeader from "~/components/ShopDetailsHeader";
import tw from "~/lib/tailwind";
import Triangle from "~/../assets/svgIcons/HomeIcons/BackGroundRectangle.svg";
import Animated, { FadeIn } from "react-native-reanimated";
import BikeSlidingAnimation from "~/components/BikeSlidingAnimation";

const SingleItemScreen = ({ navigation }: any) => {
    const [isBottomSheetOpen, setIsBottomSheetOpen] = React.useState(false);
    const childRef = useRef<any>(null);

   const onpressFunction = () => {
    if(isBottomSheetOpen){
        childRef && childRef.current.closeTheBottomSheet()
      setIsBottomSheetOpen(false);
    }else{
        navigation.goBack();
    }
    }
  return (
    <View style={tw`flex-1 bg-blue-100 pt-10  relative`}>
      <Animated.View
        entering={FadeIn.delay(500)}
        style={tw`absolute bottom-0 right-0 w-full  `}
      >
        <Triangle preserveAspectRatio="none" style={tw``} width={"100%"} />
      </Animated.View>
      <View style={tw`px-4`} >

      <ShopDetailsHeader isBottomSheetOpen={isBottomSheetOpen} title="PEUGEOT - LR01" onpress={onpressFunction} />
      </View>
      <View style={tw`flex-1`}>
        <BikeSlidingAnimation ref={childRef} setIsBottomSheetOpen={setIsBottomSheetOpen} />
      </View>
    </View>
  );
};

export default SingleItemScreen;
