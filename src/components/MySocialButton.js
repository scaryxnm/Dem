import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const MySearchButton = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require("../../assets/img/share.png")}
          style={{ height: 40, width: 40, marginHorizontal: 15 }}
        />
        {/* <Icon
          name="share-social-sharp"
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
