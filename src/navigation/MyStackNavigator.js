import React from "react";
import { Image, ImageBackground, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/AntDesign";
//Screens
import HomeScreen from "../screens/HomeScreen";
import BussinessScreen from "../screens/BussinessScreen";
import MySearchScreen from "../screens/MySearchScreen";
import ProductDetail from "../screens/Product/ProductDetail";
import NavbarButton from "../components/NavbarButton";
import MySearchButton from "../components/MySearchButton";
import inLoginScreen from "../screens/inLoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import NewProject from "../screens/NavbarMenus/NewProject";
import MyProjectDetails from "../screens/NavbarMenus/MyProjectDetails";
import { startClock } from "react-native-reanimated";
import ActivityProduct from "../screens/Product/ActivityProduct";
import Paying from "../screens/Product/Paying";
import ProductComment from "../screens/Product/ProductComment";

import HandivOgoh from "../screens/Product/HandivOgoh";

const Stack = createStackNavigator();

export default ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Bussiness"
      component={BussinessScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MySearchScreen"
      component={MySearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="inLoginScreen"
      component={inLoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NewProject"
      component={NewProject}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MyProjectDetails"
      component={MyProjectDetails}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ActivityProduct"
      component={ActivityProduct}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Paying"
      component={Paying}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductComment"
      component={ProductComment}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="HandivOgoh"
      component={HandivOgoh}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
