import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const MyBackButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={css.ar}>
        {/* <Icon name="ios-chevron-back-sharp" size={30} color={"#FFFFFF"} /> */}
        <Image
          source={require("../../assets/img/back.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default MyBackButton;

const css = StyleSheet.create({
  ar: {
    width: 40,
    height: 40,

    borderRadius: 10,
    borderColor: "#707070",
    alignSelf: "center",
    justifyContent: "center",
    marginHorizontal: 12,
  },
});
