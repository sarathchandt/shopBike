import React, { useEffect, useRef } from "react";
import { BackHandler, Dimensions, View } from "react-native";
import ShopDetailsHeader from "~/components/ShopDetailsHeader";
import tw from "~/lib/tailwind";
import Triangle from "~/../assets/svgIcons/HomeIcons/BackGroundRectangle.svg";
import Animated, { FadeIn } from "react-native-reanimated";
import BikeSlidingAnimation from "~/components/BikeSlidingAnimation";
import { RootStackScreenProps } from "~/lib/types";

const SingleItemScreen = ({
  navigation,
}: RootStackScreenProps<"singleItemScreen">) => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = React.useState(false);
  const childRef = useRef<any>(null);

  // function to handle the back press and close the bottom sheet
  const onpressFunction = () => {
    if (isBottomSheetOpen) {
      childRef && childRef.current.closeTheBottomSheet();
      setIsBottomSheetOpen(false);
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    const backAction = () => {
      if (isBottomSheetOpen) {
        childRef && childRef.current.closeTheBottomSheet();
        setIsBottomSheetOpen(false);
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [isBottomSheetOpen]);

  return (
    <View style={tw`flex-1 bg-blue-100 pt-4 relative`}>
      <Animated.View
        entering={FadeIn.delay(500)}
        style={tw`absolute bottom-0 right-0 w-full  `}
      >
        <Triangle preserveAspectRatio="none" style={tw``} width={"100%"} />
      </Animated.View>
      <View style={tw`px-4`}>
        <ShopDetailsHeader
          isBottomSheetOpen={isBottomSheetOpen}
          title="PEUGEOT - LR01"
          onpress={onpressFunction}
        />
      </View>
      <View style={tw`flex-1`}>
        <BikeSlidingAnimation
          nav={() => {
            onpressFunction();
            navigation.push("shopingCartScreen");
          }}
          ref={childRef}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
        />
      </View>
    </View>
  );
};

export default SingleItemScreen;
