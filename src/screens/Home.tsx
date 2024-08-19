import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import Homeheader from "~/components/Homeheader";
import OfferWithGlassEffect from "~/components/OfferWithGlassEffect";
import tw from "~/lib/tailwind";
import OfferBike from "~/../assets/svgIcons/HomeIcons/OfferBike.svg";
import BackGroundRect from "~/../assets/svgIcons/HomeIcons/RectangleBg.svg";
import FilteringOptions from "~/components/FilteringOptions";
import ShopItemMap from "~/components/ShopItemMap";

const Home = ({ navigation }: any) => {
  const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = useWindowDimensions();
  return (
    <View style={tw`flex-1 bg-blue-100 relative`}>
      <View style={tw`absolute bottom-0  right-0 `}>
        <BackGroundRect
          width={WINDOW_WIDTH}
          preserveAspectRatio="none"
          height={WINDOW_HEIGHT / 1.2}
        />
      </View>
      <Homeheader />
      <View style={tw`flex-1  `}>
        <ScrollView showsHorizontalScrollIndicator={false} style={tw``}>
          <OfferWithGlassEffect BikeIcon={OfferBike} offerPercent={30} />
          <FilteringOptions />
          <ShopItemMap navigation={navigation} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
