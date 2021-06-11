import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Avatar, Caption, Title, Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import UserContext from "../UserContex.js/UserContex";
import ListAccordion from "./ListAccordion";

const DrawerContent = (props) => {
  const state = useContext(UserContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={{ marginTop: 15 }}>
          <View>
            {state.isLoggedIn ? (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Profile")}
              >
                <Avatar.Image
                  size={100}
                  source={require("../../assets/img/user1.jpeg")}
                  style={{ backgroundColor: "red", marginHorizontal: 80 }}
                />
                <Text
                  style={{
                    marginLeft: 20,
                    marginVertical: 15,
                    fontSize: 16,

                    marginHorizontal: 40,
                  }}
                >
                  Тавтай морил!
                  <Text style={styles.useg2}>{state.userName}</Text>
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => props.navigation.navigate("LoginScreen")}
              >
                <Avatar.Image
                  size={100}
                  source={require("../../assets/img/user1.jpeg")}
                  style={{ backgroundColor: "red", marginHorizontal: 80 }}
                />
                <View
                  style={{
                    marginLeft: 20,
                    marginVertical: 15,
                    flex: 1,
                    flexDirection: "row",
                  }}
                >
                  <Caption style={styles.useg2}>Бүртгүүлэх </Caption>
                  <Caption style={styles.useg}>эсвэл </Caption>
                  <Caption style={styles.useg2}>Нэвтрэх </Caption>
                </View>
              </TouchableOpacity>
            )}
          </View>

          {state.isLoggedIn ? (
            <View>
              <DrawerItem
                label="Миний төслүүд"
                onPress={() => props.navigation.navigate("MyProject")}
                icon={() => (
                  <Ionicons name="rocket" color={"#FF8D1A"} size={30} />
                )}
              />
              <DrawerItem
                label="Ангилал"
                onPress={() => props.navigation.navigate("Lists")}
                icon={() => <Icon name="tag" color={"#FF8D1A"} size={30} />}
              />
              <DrawerItem
                label="Хайлт"
                onPress={() => props.navigation.navigate("MySearchScreen")}
                icon={() => (
                  <Ionicons name="ios-search" color={"#FF8D1A"} size={30} />
                )}
              />
              <DrawerItem
                label="Бидний тухай"
                onPress={() => props.navigation.navigate("Service")}
                icon={() => (
                  <Ionicons name="ios-people" color={"#FF8D1A"} size={30} />
                )}
              />
              <DrawerItem
                label="Асуулт, хариулт"
                onPress={() => props.navigation.navigate("Questions")}
                icon={() => (
                  <FontAwesome
                    name="question-circle"
                    color={"#FF8D1A"}
                    size={30}
                  />
                )}
              />
              <DrawerItem
                label="Холбоо барих"
                onPress={() => props.navigation.navigate("Contact")}
                icon={() => <Icon name="phone" color={"#FF8D1A"} size={30} />}
              />
              <DrawerItem
                label="Тохиргоо"
                onPress={() => props.navigation.navigate("Settings")}
                icon={() => (
                  <Ionicons
                    name="ios-settings-sharp"
                    color={"#FF8D1A"}
                    size={30}
                  />
                )}
              />
              <DrawerItem
                label="Системээс гарах"
                onPress={() => state.logout()}
                icon={() => (
                  <Icon name="exit-to-app" color={"#FF8D1A"} size={30} />
                )}
              />
            </View>
          ) : (
            <View>
              <DrawerItem
                label="Миний төслүүд"
                onPress={() => props.navigation.navigate("MyProject")}
                icon={() => <Icon name="rocket" color={"#FF8D1A"} size={30} />}
              />
              <DrawerItem
                label="Ангилал"
                onPress={() => props.navigation.navigate("Lists")}
                icon={() => <Icon name="tag" color={"#FF8D1A"} size={30} />}
              />
              <DrawerItem
                label="Бидний тухай"
                onPress={() => props.navigation.navigate("Service")}
                icon={() => (
                  <Ionicons name="ios-people" color={"#FF8D1A"} size={30} />
                )}
              />
              <DrawerItem
                label="Асуулт, хариулт"
                onPress={() => props.navigation.navigate("Questions")}
                icon={() => (
                  <FontAwesome
                    name="question-circle"
                    color={"#FF8D1A"}
                    size={30}
                  />
                )}
              />
              <DrawerItem
                label="Холбоо барих"
                onPress={() => props.navigation.navigate("Contact")}
                icon={() => <Icon name="phone" color={"#FF8D1A"} size={30} />}
              />
              <DrawerItem
                label="Тохиргоо"
                onPress={() => props.navigation.navigate("Settings")}
                icon={() => (
                  <Ionicons
                    name="ios-settings-sharp"
                    color={"#FF8D1A"}
                    size={30}
                  />
                )}
              />
            </View>
          )}
        </Drawer.Section>
      </DrawerContentScrollView>
      <Text></Text>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  useg: {
    fontSize: 16,
    marginHorizontal: 0.2,
  },
  useg2: {
    fontSize: 17,
    marginHorizontal: 0.2,

    color: "#FF8D1A",
  },
});
