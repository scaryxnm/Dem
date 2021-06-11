import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const MySearchButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require("../../assets/img/search.png")}
          style={{ width: 40, height: 40, marginHorizontal: 20 }}
        />
        {/* <Icon
          name="search1"
          size={20}
          style={{
            marginHorizontal: 20,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            color: "white",
          }}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default MySearchButton;

const styles = StyleSheet.create({});
