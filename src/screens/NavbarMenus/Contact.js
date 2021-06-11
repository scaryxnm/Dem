import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyButton from "../../components/MyButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyTextInput from "../../components/MyTextInput";
import Icon from "react-native-vector-icons/AntDesign";

const Contact = ({ navigation: { goBack } }) => {
  return (
    <ScrollView>
      <Header
        backgroundImage={require("../../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Холбоо барих",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
        leftComponent={<MyBackButton onPress={() => goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View
        style={{
          borderRadius: 50,
          backgroundColor: "white",
          shadowColor: "#000000",
          shadowOpacity: 0.2,
        }}
      >
        <View style={{ marginTop: 40 }}>
          <MyTextInput placeholder="Таны нэр" />
          <MyTextInput placeholder="Утасны дугаар" />
          <MyTextInput placeholder="И-Мейл хаяг" />
          <TextInput
            style={{
              marginVertical: 15,
              borderWidth: 1,
              borderColor: "#E1E1E1",
              height: 100,
              width: 295,
              alignSelf: "center",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: "bold",
            }}
            placeholder="Санал хүсэлтээ бичнэ үү"
            maxLength={100}
          />
          <MyButton
            title={"Илгээх"}
            onPress={() =>
              Alert.alert(
                "Таны саналыг хүлээн авлаа. Бид тантай удахгүй холбогдох болно. Танд баярлалаа"
              )
            }
            style={{ backgroundColor: "#FF8D1A" }}
          />
          <View style={{ flexDirection: "row", marginVertical: 50 }}>
            <View style={{ marginHorizontal: 50 }}>
              <Text style={{ fontSize: 12 }}>И-Мейл хаяг</Text>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                info@dem.asia
              </Text>
            </View>
            <View style={{ marginHorizontal: 60 }}>
              <Text style={{ fontSize: 12 }}>Утасны дугаар</Text>
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                +(976)77497574
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",

              marginVertical: 60,
              marginHorizontal: 50,
            }}
          >
            <Icon
              name="youtube"
              size={40}
              color={"#FF8D1A"}
              style={{ marginHorizontal: 20 }}
            />

            <Icon
              name="facebook-square"
              size={40}
              color={"#FF8D1A"}
              style={{ marginHorizontal: 20 }}
            />
            <Icon
              name="instagram"
              size={40}
              color={"#FF8D1A"}
              style={{ marginHorizontal: 20 }}
            />
            <Icon
              name="twitter"
              size={40}
              color={"#FF8D1A"}
              style={{ marginHorizontal: 20 }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({});
