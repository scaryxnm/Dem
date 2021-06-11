import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductData from "../data/ProductData";
const MyCustomHeader = () => {
  const data = ProductData;
  return (
    <View>
      <Text> {data.name} </Text>
    </View>
  );
};

export default MyCustomHeader;

const styles = StyleSheet.create({});
