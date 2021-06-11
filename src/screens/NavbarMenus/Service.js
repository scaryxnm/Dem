import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";

const Service = ({ navigation: { goBack } }) => {
  return (
    <View>
      <Header
        backgroundImage={require("../../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Бидний тухай",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
        leftComponent={<MyBackButton onPress={() => goBack()} />}
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
        <View style={{ marginHorizontal: 50 }}>
          <Text
            style={{ fontSize: 16, fontWeight: "bold", marginVertical: 50 }}
          >
            Бид бусдад туслахад таны тус хэрэгтэй
          </Text>
          <Text style={{ fontSize: 13 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Service;

const styles = StyleSheet.create({});
