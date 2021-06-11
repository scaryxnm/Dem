import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MyButton = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[css.button, style]}>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 16 }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const css = StyleSheet.create({
  button: {
    height: 50,
    width: 310,
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});
