import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "~/lib/tailwind";
import GradientView from "./GradientView";

type TextInputProps = {
  onApplyPress: (text: string) => void;
};

const TextInputComponent = ({ onApplyPress }: TextInputProps) => {
  const [text, setText] = useState("");

  return (
    <View
      style={tw`flex-row border-t-[0.5px] border-textWhite-100 py-4 pl-4 pr-3`}
    >
      <View
        style={[
          tw` p-1  flex-1 gap-4 rounded-l-5 overflow-hidden`,
          {
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
        ]}
      >
        <TextInput
          onChangeText={(text) => {
            setText(text);
          }}
          style={tw`h-12 bg-blue-100 px-4 text-textWhite-100  `}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={tw`top-[0.9] -left-1`}
        onPress={() => {
          text.length !== 0 && onApplyPress(text);
        }}
      >
        <GradientView roundeness="[10px] ">
          <View style={tw`h-12`}>
            <Text style={tw`font-bold my-auto px-10 text-white`}>Apply</Text>
          </View>
        </GradientView>
      </TouchableOpacity>
    </View>
  );
};

export default TextInputComponent;
