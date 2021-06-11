import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyButton from "../../components/MyButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyTextInput from "../../components/MyTextInput";

const NewProject = ({ navigation }) => {
  return (
    <View>
      <Header
        backgroundImage={require("../../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Холбоо барих",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: 40,
          shadowColor: "#000000",
          shadowOpacity: 0.2,
        }}
      >
        <View style={{ marginVertical: 15 }}>
          <MyTextInput placeholder="Төслийн нэр" />
          <MyTextInput placeholder="Тохирох төрлөө сонгоно уу" />
          <MyTextInput placeholder="Байршил" />
          <MyTextInput placeholder="0.0" />
          <MyTextInput placeholder="2021-04-20" />
          <TextInput
            style={{
              marginVertical: 15,
              borderWidth: 1,
              borderColor: "#E1E1E1",
              height: 230,
              width: 295,
              alignSelf: "center",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: "bold",
            }}
            placeholder="2021-04-20"
            maxLength={100}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 40,
          shadowColor: "#000000",
          shadowOpacity: 0.2,
        }}
      >
        <MyButton
          title={"Илгээх"}
          onPress={() => alert("Hi")}
          style={{ backgroundColor: "#FF8D1A" }}
        />
      </View>
    </View>
  );
};

export default NewProject;

const styles = StyleSheet.create({});
