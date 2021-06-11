import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

export default function (props) {
  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      {...props}
      style={[css.inputField, props.style]}
    />
  );
}

const css = StyleSheet.create({
  inputField: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    height: 45,
    width: 295,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    textAlign: "justify",
    borderRadius: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
});
