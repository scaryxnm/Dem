import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import { Header } from "react-native-elements";
import UserContext from "../UserContex.js/UserContex";

import MyBackButton from "../components/MyBackButton";
import MyTextInput from "../components/MyTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const inLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("a@gmail.com");
  const [password, setPassword] = useState("1234");
  const [error, setError] = useState(null);

  const state = useContext(UserContext);

  const loginHandler = () => {
    if (email.length === 0) {
      Alert.alert("Та имэйл хаягаа бичнэ үү");
      return;
    }

    if (password.length === 0) {
      Alert.alert("Та нууц үгээ бичнэ үү");
      return;
    }

    state.login(email, password);
  };
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
        <View style={{ marginTop: 100 }}>
          <MyTextInput
            keyboardType="email-address"
            placeholder="И-Мейл хаяг"
            onChangeText={setEmail}
            value={email}
          />
          <MyTextInput
            placeholder="Нууц үг"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                marginVertical: 20,
                fontSize: 12,
                textDecorationLine: "underline",
              }}
            >
              Нууц үгээ мартсан уу?
            </Text>
          </TouchableOpacity>

          <MyButton
            title={"Нэвтрэх"}
            onPress={loginHandler}
            style={{ backgroundColor: "#FF8D1A" }}
          />
          <Text
            style={{ fontSize: 12, marginVertical: 15, alignSelf: "center" }}
          >
            Хэрэв та бүртгэлгүй бол
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
        </View>
      </View>
    </View>
  );
};

export default inLoginScreen;

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
