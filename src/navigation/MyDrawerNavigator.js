import React, { useContext } from "react";
import { Button, ImageBackground } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../components/DrawerContent";
import MyStackNavigator from "./MyStackNavigator";
import MyProject from "../screens/NavbarMenus/MyProject";
import Service from "../screens/NavbarMenus/Service";
import Questions from "../screens/NavbarMenus/Questions";
import Contact from "../screens/NavbarMenus/Contact";
import Settings from "../screens/NavbarMenus/Settings";
import Lists from "../screens/NavbarMenus/Lists";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

import UserContex from "../UserContex.js/UserContex";
import Profile from "../screens/NavbarMenus/Profile";
import BussinessScreen from "../screens/BussinessScreen";
import ProductDetail from "../screens/Product/ProductDetail";
import inLoginScreen from "../screens/inLoginScreen";

const Drawer = createDrawerNavigator();

export default (props) => {
  const state = useContext(UserContex);

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        borderRadius: 40,

        shadowOpacity: 2,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Nuur" component={MyStackNavigator} />

      {state.isLoggedIn ? (
        <>
          <Drawer.Screen name="MyProject" component={MyProject} />
          <Drawer.Screen name="Lists" component={Lists} />
          <Drawer.Screen name="Service" component={Service} />
          <Drawer.Screen name="Questions" component={Questions} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Profile" component={Profile} />
        </>
      ) : (
        <>
          <Drawer.Screen name="MyProject" component={MyProject} />
          <Drawer.Screen name="Lists" component={Lists} />
          <Drawer.Screen name="Service" component={Service} />
          <Drawer.Screen name="Questions" component={Questions} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="LoginScreen" component={LoginScreen} />
          <Drawer.Screen name="inLoginScreen" component={inLoginScreen} />
          <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      )}
    </Drawer.Navigator>
  );
};
