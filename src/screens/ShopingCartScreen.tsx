import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import CartSingleItem from "~/components/CartSingleItem";
import ShopDetailsHeader from "~/components/ShopDetailsHeader";
import tw from "~/lib/tailwind";
import { RootStackScreenProps } from "~/lib/types";

import Bike_1 from "~/../assets/svgIcons/ShopItems/Bike_1.svg";
import Bike_2 from "~/../assets/svgIcons/ShopItems/Bike_2.svg";
import Helmet from "~/../assets/svgIcons/ShopItems/Helmet.svg";
import { tempShopItemList } from "~/lib/constants";
import TextInputComponent from "~/components/TextInputComponent";
import BottomSwipeComponent from "~/components/BottomSwipeComponent";

const TextComponent = ({
  subTotal,
  price,
  isPercentage = false,
  textStyle = "",
}: {
  subTotal: string;
  price: number | string;
  isPercentage?: boolean;
  textStyle?: string;
}) => (
  <View style={tw`flex-row justify-between`}>
    <Text style={tw`text-white text-base mt-4`}>{subTotal}</Text>
    {!isPercentage && (
      <Text style={tw`text-textWhite-100 text-base mt-4  ${textStyle}`}>
        ${price}
      </Text>
    )}
    {isPercentage && (
      <Text style={tw`text-textWhite-100 text-base mt-4 ${textStyle}`}>
        {price}%
      </Text>
    )}
  </View>
);



const icons = [Bike_1, Helmet, Bike_2];
const ShopingCartScreen = ({
  navigation,
}: RootStackScreenProps<"shopingCartScreen">) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const onApplyDiscount = (text: string) => {
    Keyboard.dismiss();
    if (text === "Bike") {
      setDiscountPercentage(30);
    }
  };

  useEffect(() => {
    let total = 0;
    tempShopItemList.slice(0, 3).forEach((item) => {
      total = total + item.price;
    });
    setTotalPrice(total);
  }, []);

  const increaseTheTotalPrice = (price: number) => {
    setTotalPrice((pre) => pre + price);
  };
  const decreaseTheTotalPrice = (price: number) => {
    setTotalPrice((pre) => pre - price);
  };

  const totalValueCalculation = () => {
    if (discountPercentage == 0) {
      return totalPrice.toFixed(2);
    } else {
      return (totalPrice - (totalPrice * discountPercentage) / 100).toFixed(2);
    }
  };

  return (
    <View style={tw`bg-blue-100 flex-1 pt-4`}>
      <View style={tw`px-4`}>
        <ShopDetailsHeader
          isBottomSheetOpen={false}
          onpress={navigation.goBack}
          title="My Shopping Cart"
        />
      </View>
      <View style={tw`flex-1 `}>
        <ScrollView showsVerticalScrollIndicator={false} style={tw``}>
          {[...tempShopItemList].slice(0, 3).map((item, index) => {
            return (
              <CartSingleItem
                increaseTheTotalPrice={increaseTheTotalPrice}
                decreaseTheTotalPrice={decreaseTheTotalPrice}
                index={index}
                Icon={icons[index % 3]}
                itemPrice={item.price}
                title={item.name}
                key={index.toString()}
              />
            );
          })}
        </ScrollView>
      </View>
      <TextInputComponent onApplyPress={onApplyDiscount} />
      <View style={tw`h-4/10 px-4 pb-4 `}>
        <View style={tw`flex-1`}>
          <Text style={tw`text-textWhite-100 text-center text-base mt-auto `}>
            Your bag qualifies for free shipping
          </Text>
          <TextComponent subTotal="Subtotal:" price={totalPrice.toFixed(2)} />
          <TextComponent subTotal="Delivery Fee:" price={0} />
          <TextComponent
            subTotal="Discount:"
            price={discountPercentage}
            isPercentage
          />
          <TextComponent
            subTotal="Total:"
            price={totalValueCalculation()}
            textStyle="text-xl font-bold text-blue-50"
          />
          <View>
            <BottomSwipeComponent/>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ShopingCartScreen;
