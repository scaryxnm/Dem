import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyButton from "../../components/MyButton";

const MyProject = ({ navigation }) => {
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
          borderRadius: 40,
          backgroundColor: "white",
          shadowColor: "#000000",
          shadowOpacity: 0.2,
        }}
      >
        <View style={{ marginHorizontal: 80 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              alignSelf: "center",
              marginVertical: 50,
            }}
          >
            Таны зарласан төслүүд
          </Text>
          <Text style={{ fontSize: 14, alignSelf: "center" }}>
            Өршөөгөөрэй. Та одоогоор төсөл зарлаагүй байна.
          </Text>
          <MyButton
            title={"Шинэ төсөл эхлүүлэх"}
            onPress={() => navigation.navigate("NewProject")}
            style={{ backgroundColor: "#FF8D1A", marginVertical: 50 }}
          />
          <Text
            style={{ fontSize: 14, fontWeight: "bold", alignSelf: "center" }}
          >
            Таны ороцлсон төслүүд
          </Text>
          <Text style={{ marginVertical: 50, alignSelf: "center" }}>
            Өршөөгөөрэй. Та одоогоор төсөлд оролцоогүй байна.
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("MyProjectDetails")}
          >
            <View style={css.register}>
              <Text
                style={{ color: "#FF8D1A", fontSize: 16, fontWeight: "bold" }}
              >
                Төслүүдтэй танилцах
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MyProject;

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
