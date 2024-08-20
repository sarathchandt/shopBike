import React, { memo, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import tw from "~/lib/tailwind";
import GradientView from "./GradientView";


import Plus from "~/../assets/svgIcons/cart/Plus.svg";
import Minus from "~/../assets/svgIcons/cart/Minus.svg";

const WINDOW_WIDTH = Dimensions.get("window").width;

type CartSingleItemProps = {
    title:string;
    itemPrice:number;
    Icon:any
    index:number;
    increaseTheTotalPrice:(price:number) => void;
    decreaseTheTotalPrice:(price:number) => void;
}

const CartSingleItem = ({Icon,itemPrice ,title,index,decreaseTheTotalPrice,increaseTheTotalPrice}:CartSingleItemProps) => {


    const [numberOfItems,setNumberOfItems] = useState(1);
    const [price,setPrice] = useState(itemPrice);

    const increaseItem = () => {
        setNumberOfItems(pre=>pre+1);
        setPrice(pre=>pre+itemPrice)
        increaseTheTotalPrice(itemPrice)
    };
    const decreaseItem = () => {
        if(numberOfItems === 1) return;
        setNumberOfItems(pre=>pre-1)
        setPrice(pre=>pre-itemPrice)
        decreaseTheTotalPrice(itemPrice)
    }

    

  return (
    <View style={tw`px-4 ${index !== 0 ?'border-t-[0.2px]' :'' }  py-4 border-textWhite-200`}>
      <View style={tw`flex-row gap-4`}>
        <GradientView
          primaryColorArray={["#56637e", "#3c4558", "#2b3340"]}
          secondaryColorArray={["#49526a", "#434b60", "#343d51"]}
          roundeness="[20px]"
        >
          <View style={tw`p-2`}>
            <Icon width={WINDOW_WIDTH / 5} height={WINDOW_WIDTH / 6} />
          </View>
        </GradientView>
        <View style={tw`pt-2  flex-1`}>
          <Text style={tw`font-bold text-textWhite-100`}>{title}</Text>
          <View style={tw`flex-row  mt-auto mb-2`} >

          <Text style={tw` text-blue-60 mt-auto`}>$ {price.toFixed(2)}</Text>
          <View style={tw`ml-auto `} >
          <View
            style={[
              tw` p-1 bg-blue-200 flex-row gap-4 rounded-7px`,
              {
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              },
            ]}
          >
            <TouchableOpacity style={tw``} onPress={increaseItem} >
              <GradientView roundeness="[5px]">
                <View style={tw`p-1`}>
                  <Plus />
                </View>
              </GradientView>
            </TouchableOpacity>
            <View>
              <Text style={tw`font-bold text-textWhite-100 my-auto`}>{numberOfItems}</Text>
            </View>
            <TouchableOpacity style={tw``} onPress={decreaseItem} >
              <GradientView
                roundeness="[5px]"
                primaryColorArray={["#56637e", "#3c4558", "#2b3340"]}
                secondaryColorArray={["#49526a", "#434b60", "#343d51"]}
              >
                <View style={tw`p-1`}>
                  <Minus style={tw`p-2`} />
                </View>
              </GradientView>
            </TouchableOpacity>
          </View>
        </View>
          </View>
        </View>
       
      </View>
    </View>
  );
};

export default memo(CartSingleItem);
