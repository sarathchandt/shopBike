import React from "react";
import { Text, View } from "react-native";
import ShopDetailsHeader from "~/components/ShopDetailsHeader";
import tw from "~/lib/tailwind";
import { RootStackScreenProps } from "~/lib/types";

import Xicon from "~/../assets/svgIcons/cart/Xmark.svg";
import GradientView from "~/components/GradientView";

const CheckotScreen = ({
  navigation,
}: RootStackScreenProps<"checkotScreen">) => {
  return (
    <View style={tw`flex-1 bg-blue-100 pt-4`}>
      <View style={tw`px-4`}>
        <ShopDetailsHeader
          Icon={Xicon}
          isBottomSheetOpen={false}
          onpress={navigation.goBack}
          title="Checkout"
        />
      </View>
      <View style={tw`mt-4 h-4/12 px-4`}>
        <GradientView
          primaryColorArray={["#56637e", "#3c4558", "#2b3340"]}
          secondaryColorArray={["#49526a", "#434b60", "#343d51"]}
          roundeness="[30px]"
        >
          <View style={tw`w-full h-full p-6`}>
            <Text style={tw`font-bold text-white text-base`}>
              Shipping 
            </Text>
            <Text style={tw`font-bold text-white text-base`}>
            Adress
            </Text>
          </View>
        </GradientView>
      </View>
    </View>
  );
};

export default CheckotScreen;
