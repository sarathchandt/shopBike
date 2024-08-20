import React, { useEffect, forwardRef, useImperativeHandle } from "react";
import { Dimensions, DimensionValue, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import tw from "~/lib/tailwind";
import Bike from "~/../assets/svgIcons/ShopDetails/BikeToAnimate.svg";
import BottomSheet from "./BottomSheet";

const WINDOW_WIDTH = Dimensions.get("window").width;

type BikeSlidingAnimationProps = {
  setIsBottomSheetOpen: (value: boolean) => void;
  nav: any;
};

const BikeSlidingAnimation = forwardRef(
  ({ setIsBottomSheetOpen, nav }: BikeSlidingAnimationProps, ref) => {
    const translateX = useSharedValue<number>(
      -(WINDOW_WIDTH + WINDOW_WIDTH / 2)
    );
    const rotationValue = useSharedValue<string>("-50");
    const heightValue = useSharedValue<DimensionValue | undefined>("85%");
    const widthValue = useSharedValue<DimensionValue | undefined>("100%");
    const animatedStyles = useAnimatedStyle(() => ({
      width: widthValue.value,
      height: heightValue.value,
      transform: [
        { translateX: withTiming(translateX.value, { duration: 1000 }) },
        { rotate: withTiming(`${rotationValue.value}deg`, { duration: 1000 }) },
      ],
    }));

    const closeTheBottomSheet = () => {
      setIsBottomSheetOpen(false);
      heightValue.value = withTiming("85%");
      widthValue.value = withTiming("100%");
    };
    useImperativeHandle(ref, () => ({
      closeTheBottomSheet,
    }));
    useEffect(() => {
      const timer = setTimeout(() => {
        translateX.value = 0;
        rotationValue.value = "0";
        clearTimeout(timer);
      }, 0);
    }, []);

    return (
      <>
        <Animated.View style={[tw` px-1 mx-auto`, animatedStyles]}>
          <Bike width={"100%"} style={tw`my-auto mx-auto`} />
        </Animated.View>

        <View style={tw`flex-1`}>
          <BottomSheet
          nav={nav}
            onPress={() => {
              setIsBottomSheetOpen(true);
              heightValue.value = withTiming("40%");
              widthValue.value = withTiming("70%");
            }}
          />
        </View>
      </>
    );
  }
);

export default BikeSlidingAnimation;
