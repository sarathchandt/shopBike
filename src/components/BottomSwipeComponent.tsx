import "react-native-gesture-handler";
import React, { useState } from "react";
import { Text, View } from "react-native";
import Animated, {
    runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import tw from "~/lib/tailwind";
import GradientView from "./GradientView";
import Forward from "~/../assets/svgIcons/cart/Forward.svg"

type BottomSwipeProps = {
    onEndCall:()=>void;
}
const BottomSwipeComponent = ({onEndCall}:BottomSwipeProps) => {
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [movingLayoutWidth, setMovingLayoutWidth] = useState(0);

  const pressed = useSharedValue<boolean>(false);

  const offset = useSharedValue<number>(0);

//   function to  handling the drag component 
  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      if (
        event.translationX > 0 &&
        event.translationX < layoutWidth - (movingLayoutWidth - 10)
      ) {
        offset.value = event.translationX;
      }
    })
    .onFinalize(() => {
      if (offset.value > (layoutWidth - (movingLayoutWidth - 10)) / 2) {
        offset.value = withTiming(layoutWidth - (movingLayoutWidth - 10));
        runOnJS(onEndCall)()

      } else {
        offset.value = withTiming(0);
      }
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <View
      style={tw`h-12 mt-6 w-6/12 mx-auto`}
      onLayout={(e) => {
        setLayoutWidth(e.nativeEvent.layout.width);
      }}
    >
      <View
        style={[
          tw`  bg-blue-200 h-full flex-row gap-4 rounded-7px relative`,
          {
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
      >
        <View style={tw`absolute  h-full w-full `} >

        <Text style={tw`m-auto text-white  text-base text-textWhite-100 `}>Checkout</Text>
        </View>
        <View style={tw`p-1`} >

        <GestureDetector gesture={pan}>
          <Animated.View
            onLayout={(e) => {
                setMovingLayoutWidth(e.nativeEvent.layout.width);
            }}
            style={[tw`h-13 w-13 -top-1.5 -left-1 `, animatedStyles]}
            >
            <GradientView>
              <View style={tw`h-full w-full`}>
                <Forward style={tw`m-auto`} />
              </View>
            </GradientView>
          </Animated.View>
        </GestureDetector>
              </View>
      </View>
    </View>
  );
};

export default BottomSwipeComponent;
