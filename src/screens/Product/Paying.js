import React, { useEffect } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import PayingData from "../../data/PayingData";
import MyButton from "../../components/MyButton";
import { useNavigation } from "@react-navigation/native";

const Paying = ({ route }) => {
  const data = route.params;
  const navigation = useNavigation();
  const Cart = ({ pay }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 40,
          marginVertical: 40,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              color: "#3389EE",
              fontWeight: "bold",
              margin: 15,
              marginHorizontal: 20,
            }}
          >
            {pay.price}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              color: "#FF8D1A",
              margin: 20,
              left: 60,
            }}
          >
            {pay.paying_persons}
          </Text>
        </View>
        <Text
          style={{
            fontSize: 14,
            color: "#5A5959",
            bottom: 15,
            marginLeft: 20,
          }}
        >
          {" "}
          {pay.name}{" "}
        </Text>
        <Text style={{ fontSize: 14, color: "#5A5959", margin: 20 }}>
          {" "}
          {pay.details}{" "}
        </Text>
        <Image
          source={pay.paying_photo}
          style={{ width: 285, height: 285, alignSelf: "center" }}
        />

        <MyButton
          title={"Сонгох"}
          onPress={() => navigation.navigate("HandivOgoh", pay)}
          style={{
            backgroundColor: "#FF8D1A",
            alignItems: "center",
            width: 145,
          }}
        />
      </View>
    );
  };
  return (
    <ScrollView>
      <Header
        backgroundImage={data.photo_url}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
        centerComponent={{
          text: "Хандив өгөх",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MyNotiffButton />}
      />
      <View
        style={{
          marginVertical: 40,
          backgroundColor: "#F5F5F5",
          padding: 20,
          borderRadius: 40,
        }}
      >
        <View style={{ borderRadius: 40, backgroundColor: "white" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#3389EE",
              marginVertical: 30,
              marginHorizontal: 10,
            }}
          >
            Урамшуулалгүй хандив
          </Text>
          <Text
            style={{ fontSize: 14, fontWeight: "200", marginHorizontal: 10 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Text>
          <View>
            <MyButton
              title={"Сонгох"}
              onPress={() => navigation.navigate("HandivOgoh", data)}
              style={{
                backgroundColor: "#FF8D1A",
                alignItems: "center",
                width: 145,
                marginVertical: 40,
              }}
            />
          </View>
        </View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 20 }}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          data={PayingData}
          renderItem={({ item }) => <Cart pay={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default Paying;

const styles = StyleSheet.create({});
