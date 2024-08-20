import React, { useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "~/lib/tailwind";
import GradientView from "./GradientView";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const WINDOW_HEIGHT = Dimensions.get("window").height;

type BottomSheetProps = {
  onPress: () => void;
  nav:any
};

const BottomSheet = ({ onPress,nav }: BottomSheetProps) => {
  const translateY = useSharedValue<number>(WINDOW_HEIGHT);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: withTiming(translateY.value, { duration: 500 }) },
    ],
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      translateY.value = 0;
      clearTimeout(timer);
    }, 0);
  }, []);

  const onPressHandler = () => {
    onPress();
  };

  return (
    <Animated.View
      style={[tw` h-[${WINDOW_HEIGHT / 1.7}px]  w-full`, animatedStyles]}
    >
      
      <GradientView
        primaryColorArray={["#4d5362", "#2b3141", "#1b202a"]}
        secondaryColorArray={["#353e53", "#252a39", "#242c3b"]}
        roundeness="t-[30px]"
      >
        <View style={tw`h-full `}>
          <View style={[tw``, { height: (WINDOW_HEIGHT * 15) / 100 }]}>
            <View style={tw`my-auto`}>
              <View style={tw`flex-row justify-center gap-8 `}>
                <TouchableOpacity
                  style={[
                    tw` px-8 py-4  bg-blue-200 rounded-7px`,
                    {
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    },
                  ]}
                  onPress={onPressHandler}
                >
                  <Text style={tw`text-textWhite-100`}>Description</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    tw` px-8 py-4  bg-blue-200 rounded-7px`,
                    {
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    },
                  ]}
                >
                  <Text style={tw`text-textWhite-100`}>Specification</Text>
                </TouchableOpacity>
               
              </View>
            </View>
          </View>
          <View style={tw`flex-1 px-4`}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={tw`text-white text-base font-bold`}>
                PEUGEOT - LR01
              </Text>
              <Text style={tw`text-textWhite-100 my-4 text-base`}>
                The LR01 uses the same design as the most iconic bikes from
                PEUGEOT Cycles' 130-year history and combines it with agile,
                dynamic performance that's perfectly suited to navigating
                today's cities. As well as a lugged steel frame and iconic
                PEUGEOT black-and-white chequer design, this city bike also
                features a 16-speed Shimano Claris drivetrain.
              </Text>
            </ScrollView>
          </View>
          <View style={[tw` mb-6 mt-auto w-full `]}>
            <GradientView
              primaryColorArray={["#4d5362", "#2d3749", "#2C3749"]}
              secondaryColorArray={["#272e3c", "#242c3b", "#242a3b"]}
              roundeness="t-[30px]"
            >
              <View
                style={[
                  tw`px-4 flex-row justify-between`,
                  { height: (WINDOW_HEIGHT * 10) / 100 },
                ]}
              >
                <Text style={tw`my-auto  text-blue-50 text-2xl`}>
                  $ 1,999.99
                </Text>
                <TouchableOpacity style={tw`my-auto`} onPress={()=>{nav.navigate('shopingCartScreen')}} >
                  <GradientView
                    primaryColorArray={["#51E3F5", "#2b3141", "#232AE8"]}
                    secondaryColorArray={["#34BFE9", "#408FED", "#4863F0"]}
                  >
                    <Text style={tw`text-white px-10 py-3 `}>Add to Cart</Text>
                  </GradientView>
                </TouchableOpacity>
              </View>
            </GradientView>
          </View>
        </View>
      </GradientView>
    </Animated.View>
  );
};

export default BottomSheet;
