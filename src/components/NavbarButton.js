import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const NavbarButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Icon
          name="menuunfold"
          size={20}
          style={{
            marginHorizontal: 20,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NavbarButton;

const styles = StyleSheet.create({});
