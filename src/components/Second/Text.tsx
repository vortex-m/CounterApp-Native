import { View, Text as RnText } from "react-native";
import React from "react";

const Text = () => {
  return (
    <View>
      <RnText
        style={{
          textAlign: "center",
          fontSize: 20,
          paddingHorizontal: 3,
        }}
      >
        Please change the numbers using the buttons.The number indicates how
        many times you clicked on button.
      </RnText>
    </View>
  );
};

export default Text;
