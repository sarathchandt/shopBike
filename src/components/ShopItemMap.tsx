import React from "react";
import { View } from "react-native";
import tw from "~/lib/tailwind";
import ShopItem from "./ShopItem";

import Bike_1 from "~/../assets/svgIcons/ShopItems/Bike_1.svg";
import Bike_2 from "~/../assets/svgIcons/ShopItems/Bike_2.svg";
import Helmet from "~/../assets/svgIcons/ShopItems/Helmet.svg";

// temporary items to load
import { tempShopItemList } from "~/lib/constants";

type ShopItemMapProps = {
    navigation: any;
}

const ShopItemMap = ({navigation}:ShopItemMapProps) => {

 const iconArr = [Bike_1,  Helmet,Bike_2];
    
  return (
    <View style={tw`flex-row pb-6rem px-4 justify-center flex-wrap`}>
      {tempShopItemList.map((data, index) => {
        return (
          <View key={index} style={tw` w-6/12  `}>
            <ShopItem
            onpressFunction={()=>{navigation.navigate('singleItemScreen')}}
              key={index}
              index={index}
              ItemIcon={iconArr[index % 3]}
              ItemCat={data.cat}
              ItemName={data.name}
              ItemPrice={data.price}
            />
          </View>
        );
      })}
    </View>
  );
};

export default ShopItemMap;
