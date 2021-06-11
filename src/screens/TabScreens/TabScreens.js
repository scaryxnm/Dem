import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Popular from "./Popular";
import New from "./New";
import Ending from "./Ending";
const Tab = createMaterialTopTabNavigator();

const TabScreens = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 15, fontWeight: "500" },
        style: {
          borderTopLeftRadius: 50,
          borderTopEndRadius: 50,
          backgroundColor: "#E2E2E2",
        },
        tabStyle: {
          padding: 12,
        },
        activeTintColor: "#FF8D1A",
        inactiveTintColor: "#161616",
        indicatorStyle: {
          height: null,
          top: 0,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      <Tab.Screen name="Popular" component={Popular} />
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Ending" component={Ending} />
    </Tab.Navigator>
  );
};

export default TabScreens;

const styles = StyleSheet.create({});
