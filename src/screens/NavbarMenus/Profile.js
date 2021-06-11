import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Header, Avatar } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import UserContext from "../../UserContex.js/UserContex";

const Profile = ({ navigation }) => {
  const state = useContext(UserContext);
  return (
    <ScrollView>
      <Header
        backgroundImage={require("../../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Профайл",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View
        style={{
          borderRadius: 40,
          backgroundColor: "#F5F5F5",
          shadowColor: "#000000",
          shadowOpacity: 0.2,
        }}
      >
        <Image
          source={require("../../../assets/img/user1.jpeg")}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginVertical: 20,
            borderRadius: 50,
          }}
        />
        <Text style={{ alignSelf: "center", fontSize: 18 }}>
          Тавтай морил!
          <Text
            style={{
              fontSize: 17,
              marginHorizontal: 1,

              color: "#FF8D1A",
            }}
          >
            {state.userName}
          </Text>
        </Text>
        <View style={{ alignSelf: "center", marginVertical: 40 }}>
          <Text style={css.box}>Миний бүртгэл</Text>
          <Text style={css.box}>Мэдэгдэл</Text>
          <Text style={css.box}>Тусламж</Text>
          <Text style={css.box}>Тусламж</Text>
          <TouchableOpacity onPress={() => state.logout()}>
            <Text style={css.box}>Системээс гарах</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const css = StyleSheet.create({
  box: {
    borderWidth: 1,
    paddingHorizontal: 100,
    paddingVertical: 10,
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
