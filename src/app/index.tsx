// Corrected component function name
import React from "react";
import { View } from "react-native";
// import Greet from "../components/first/Greet";
// import Name from "../components/first/Name";
// import Age from "../components/first/Age";
// import Xhandle from "../components/first/Xhandle";
// import Subject from "../components/first/Subject";
import Text from "../components/Second/Text";
import Number from "../components/Second/Number";

export default function Index() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: 10,
      }}
    >
      {/* <Greet />
      <Name/>
      <Age/>
      <Xhandle/>
      <Subject/> */}
      <Text />
      <Number />
    </View>
  );
}
