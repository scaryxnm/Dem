import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const MySearchInput = ({ value, onValueChange, onFinishEnter }) => {
  return (
    <View style={css.searchPanel}>
      <TextInput
        onChangeText={onValueChange}
        style={css.searchText}
        placeholder="Утга оруулна уу. "
        placeholderTextColor="#DAE0E2"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onFinishEnter}
      ></TextInput>
      <Feather style={css.searchIcon} name="search" color="#535C68" />
    </View>
  );
};

export default MySearchInput;

const css = StyleSheet.create({
  searchPanel: {
    height: 50,
    backgroundColor: "#F5F5F5",
    marginHorizontal: 20,
    borderRadius: 10,
    flexDirection: "row",
    bottom: 10,
  },
  searchText: {
    color: "white",
    fontSize: 14,
    flex: 1,
    marginHorizontal: 20,
  },
  searchIcon: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 15,
    color: "#FF8D1A",
  },
});
