import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";

const Number = () => {
  const [count, setCount] = useState(0);

  const handleClickPlus = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonBox} onPress={handleClickMinus}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBox} onPress={handleClickPlus}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        {/* <Button title="-" onPress={handleClickMinus} />
        <Button title="+" onPress={handleClickPlus} /> */}
      </View>
    </View>
  );
};

// onPress
// onPressIn
// onPressOut
// onLongPress
// activeOpacity
// delayLongPress
// delayPressIn
// delayPressOut
// disabled

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
    height: 250,
  },
  text: {
    color: "white",
    fontSize: 70,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    gap: 10,
  },
  buttonBox: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    width: 130,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default Number;
