import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "./MyBackButton";
import MyNotiffButton from "./MyNotiffButton";

const MyHeaderTest = () => {
  return (
    <View>
      <Header
        backgroundImage={data.photo_url}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={{
          text: "Хандив өгөх",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
    </View>
  );
};

export default MyHeaderTest;

const styles = StyleSheet.create({});
