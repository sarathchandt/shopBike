import React, { useState } from "react";
import { Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import HeartEnabled from "~/../assets/svgIcons/ShopItems/Heart.svg";
import HeartDisabled from "~/../assets/svgIcons/ShopItems/DisabledHeart.svg";
import GlassDisabled from "~/../assets/svgIcons/ShopItems/NotSelected.svg";
import GlassEnabled from "~/../assets/svgIcons/ShopItems/Selected.svg";
import tw from "~/lib/tailwind";

type ShopItemProps = {
  ItemIcon: any;
  ItemCat: string;
  ItemName: string;
  ItemPrice: number;
  index: number;
  onpressFunction: () => void;
};

const ShopItem = ({
  ItemCat,
  ItemIcon,
  ItemName,
  ItemPrice,
  index,
  onpressFunction
}: ShopItemProps) => {
  const [touched, setTouched] = useState(false);
  const [HeartTouched, setHeartTouched] = useState(false);
  const {width:WINDOW_WIDTH} = useWindowDimensions()

//   function to style the glass effect
  const alignHandler = (index: number) => {
    if (index % 2 !== 0) {
      return tw`ml-auto -top-6`;
    } else {
      return tw`mr-auto`;
    }
  };

//   function to style the heart icon
  const alignHeart = (index: number):string => {
    if (index % 2 !== 0) {
      return `left-[75%]`;
    } else {
      return `left-[65%] top-6`;
    }
  }

//   function to style the name, category and price of the item
  const alignItem = (index: number) => {
    if (index % 2 !== 0) {
      return `-top-7 left-4`;
    } else {
      return ``;
    }
  }

  return (
    <TouchableOpacity
      style={tw`w-full relative `}
      onPress={() => {
        setTouched(true);
        onpressFunction()
        setTouched(false);
      }}
    >
      <View style={tw`absolute h-full w-full `}>
        {!touched ? (
          <GlassDisabled
            width={"93%"}
            preserveAspectRatio="none"
            height={"100%"}
            style={alignHandler(index)}
          />
        ) : (
          <GlassEnabled
            width={"93%"}
            preserveAspectRatio="none"
            height={"100%"}
            style={alignHandler(index)}
          />
        )}
      </View>
      <View style={tw`absolute  ${alignHeart(index)}  `}>
        <TouchableOpacity
          onPress={() => {
            setHeartTouched(!HeartTouched);
          }}
        >
          {HeartTouched ? (
            <HeartEnabled width={25} height={25} />
          ) : (
            <HeartDisabled width={25} height={25} />
          )}
        </TouchableOpacity>
      </View>
      <View style={tw` w-full ${alignItem(index)}`}>
        <View style={tw`mt-12 mb-4 `} >

        <ItemIcon width={'100%'} style={tw` mx-auto`} />
        <View style={tw`mt-4 pl-4`} >

        <Text style={tw`text-textWhite-200`} >{ItemCat}</Text>
        <Text style={tw`text-white font-bold`} >{ItemName}</Text>
        <Text style={tw`text-textWhite-200`} >$ {ItemPrice}</Text>
        </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShopItem;
