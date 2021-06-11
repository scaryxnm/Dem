import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Alert,
} from "react-native";

import { Header } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TabScreens from "./TabScreens/TabScreens";
import MySearchButton from "../components/MySearchButton";
import HamburgerMenu from "../components/HamburgerMenu";
import { useNavigation } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const BussinessScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={{ flex: 1 }}>
      <Header
        backgroundImage={require("../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 200 }}
        centerComponent={{
          text: "Төслүүд",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
        leftComponent={<HamburgerMenu onPress={onPressHandler} />}
        rightComponent={
          <MySearchButton
            onPress={() => navigation.navigate("MySearchScreen")}
          />
        }
      />
      <View
        style={{
          backgroundColor: "red",
          borderRadius: 50,
          flex: 1,
          bottom: 20,
          shadowColor: "#000000",
          shadowOpacity: 0.2,
        }}
      >
        <TabScreens />
      </View>
    </View>
  );
};

const css = StyleSheet.create({});
export default BussinessScreen;
