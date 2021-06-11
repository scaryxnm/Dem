import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Header, CheckBox, Card } from "react-native-elements";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyBackButton from "../../components/MyBackButton";
import MyButton from "../../components/MyButton";

const HandivOgoh = ({ navigation, route }) => {
  const data = route.params;
  const [checked, toggleChecked] = useState(false);

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header
        backgroundImage={data.photo_url}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={{
          text: `${data.name} `,
          style: {
            color: "#FFFFFF",
            fontSize: 30,
            fontWeight: "bold",
          },
        }}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View style={{ borderRadius: 40, backgroundColor: "#F5F5F5" }}>
        <View style={{ alignSelf: "center", margin: 50 }}>
          <Text style={{ fontSize: 16, fontWeight: "200" }}>Хандивлах дүн</Text>
          <Text style={{ fontSize: 36, color: "#3389EE" }}>50.000</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => toggleChecked(!checked)}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 30,
                backgroundColor: "white",
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/img/pay/cashless-payment.png")}
                style={{ width: 40, height: 40, marginHorizontal: 15 }}
              />
              <Text style={css.useg}>Дансаар шилжүүлэх</Text>
              <CheckBox
                right
                containerStyle={{
                  marginLeft: 50,
                }}
                checkedColor="orange"
                checked={checked}
                // onPress={() => toggleChecked(!checked)}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleChecked(!checked)}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 30,
                backgroundColor: "white",
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/img/pay/qpay.png")}
                style={{ width: 40, height: 40, marginHorizontal: 15 }}
              />
              <Text style={css.useg}>qPay</Text>
              <CheckBox
                right
                containerStyle={{
                  marginLeft: 100,
                }}
                checkedColor="orange"
                checked={checked}
                // onPress={() => toggleChecked(!checked)}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleChecked(!checked)}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 30,
                backgroundColor: "white",
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/img/pay/socialpay.png")}
                style={{ width: 40, height: 40, marginHorizontal: 15 }}
              />
              <Text style={css.useg}>SocialPay</Text>
              <CheckBox
                right
                containerStyle={{
                  marginLeft: 100,
                }}
                checkedColor="orange"
                checked={checked}
                // onPress={() => toggleChecked(!checked)}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleChecked(!checked)}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 30,
                backgroundColor: "white",
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/img/pay/Khanbank.png")}
                style={{ width: 40, height: 40, marginHorizontal: 15 }}
              />
              <Text style={css.useg}>Хаан Банк</Text>
              <CheckBox
                right
                containerStyle={{
                  marginLeft: 100,
                }}
                checkedColor="orange"
                checked={checked}
                // onPress={() => toggleChecked(!checked)}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleChecked(!checked)}>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 30,
                backgroundColor: "white",
                borderRadius: 10,
                marginVertical: 10,
              }}
            >
              <Image
                source={require("../../../assets/img/pay/golomtbank.png")}
                style={{ width: 40, height: 40, marginHorizontal: 15 }}
              />
              <Text style={css.useg}>Голомт Банк</Text>
              <CheckBox
                right
                containerStyle={{}}
                checkedColor="orange"
                checked={checked}

                // onPress={() => toggleChecked(!checked)}
              />
            </View>
          </TouchableOpacity>
          <View style={{ backgroundColor: "white", borderRadius: 40 }}>
            <MyButton
              title={"Хандив өгөх"}
              onPress={() => navigation.navigate("Paying", data)}
              style={{ backgroundColor: "#FF8D1A", alignItems: "center" }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HandivOgoh;

const css = StyleSheet.create({
  useg: { fontSize: 16, fontWeight: "bold", top: 5, marginHorizontal: 10 },
});
