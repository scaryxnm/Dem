import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MyButton from "../components/MyButton";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import MyBackButton from "../components/MyBackButton";

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        backgroundImage={require("../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Нэвтрэх",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
      />
      <View
        style={{
          borderRadius: 40,
          backgroundColor: "#F5F5F5",
          shadowColor: "#000000",
          shadowOpacity: 0.2,
        }}
      >
        <View>
          <MyButton
            title={"Facebook-р нэвтрэх"}
            onPress={() => alert("Hi")}
            style={{ backgroundColor: "#365291", marginTop: 100 }}
          />
          <MyButton
            title={"Нэвтрэх"}
            onPress={() => navigation.navigate("inLoginScreen")}
            style={{ backgroundColor: "#FF8D1A" }}
          />
          <Text
            style={{
              fontSize: 12,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            эсвэл
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <View style={css.register}>
              <Text
                style={{ color: "#FF8D1A", fontSize: 16, fontWeight: "bold" }}
              >
                Бүртгүүлэх
              </Text>
            </View>
          </TouchableOpacity>
          <Text
            style={{ fontSize: 10, marginVertical: 20, marginHorizontal: 60 }}
          >
            by creating an account, you agree to our terms of use, privacy
            policy, and cookie policy.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const css = StyleSheet.create({
  register: {
    fontSize: 16,
    height: 50,
    width: 310,
    marginVertical: 20,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "#FF8D1A",
  },
});
