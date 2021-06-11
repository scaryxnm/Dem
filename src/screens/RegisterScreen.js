import React, { useState, useContext } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import { Header } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import MyBackButton from "../components/MyBackButton";
import MyTextInput from "../components/MyTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserContext from "../UserContex.js/UserContex";

const Register = ({ navigation }) => {
  const [name, setName] = useState("Tselmen");
  const [email, setEmail] = useState("tselmennm@gmail.com");
  const [password1, setPassword1] = useState("123456");
  const [password2, setPassword2] = useState("123456");
  const [error, setError] = useState(null);

  const state = useContext(UserContext);

  const signupHandler = () => {
    setError(null);
    if (name.length === 0) {
      Alert.alert("Ta nere bichne uu ");
      return;
    }
    if (password1 !== password2) {
      Alert.alert("Nuuts ug taarahgui baina!");
      return;
    }

    state.signUp(name, email, password1);
  };

  return (
    <View>
      <Header
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        backgroundImage={require("../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Бүртгүүлэх",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
      />
      <View
        style={{
          borderRadius: 50,
          backgroundColor: "#F5F5F5",
          shadowColor: "#000000",
          shadowOpacity: 0.2,
        }}
      >
        <View style={{ marginTop: 100 }}>
          <MyTextInput placeholder="name" value={name} onChangeText={setName} />
          <MyTextInput
            keyboardType="email-address"
            placeholder="И-Мейл хаяг"
            value={email}
            onChangeText={setEmail}
          />
          <MyTextInput
            placeholder="Нууц үг"
            secureTextEntry={true}
            value={password1}
            onChangeText={setPassword1}
          />
          <MyTextInput
            placeholder="Нууц үгээ давтан оруулна уу"
            secureTextEntry={true}
            value={password2}
            onChangeText={setPassword2}
          />
          {error && (
            <Text style={{ color: "red", fontSize: 16, textAlign: "center" }}>
              {error}
            </Text>
          )}
          <MyButton
            title={"Бүртгүүлэх"}
            onPress={signupHandler}
            style={{ backgroundColor: "#FF8D1A" }}
          />
          <Text
            style={{ fontSize: 12, alignSelf: "center", marginVertical: 20 }}
          >
            Хэрэв та бүртгэлтэй бол
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("inLoginScreen")}
          >
            <View style={css.register}>
              <Text
                style={{ color: "#FF8D1A", fontSize: 16, fontWeight: "bold" }}
              >
                Нэвтрэх
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
