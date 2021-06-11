import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import CommentData from "../../data/CommentData";
import Icon from "react-native-vector-icons/AntDesign";

const ProductComment = ({ navigation, route }) => {
  const data = route.params;
  const Cart = ({ place }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          borderRadius: 40,
          backgroundColor: "white",
          marginVertical: 10,
          marginHorizontal: 20,
          paddingVertical: 20,
        }}
      >
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              source={place.user_photo}
            />
            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginVertical: 5,
                }}
              >
                {" "}
                {place.name}{" "}
              </Text>
              <Text style={{ fontSize: 12, color: "#3389EE" }}>
                {" "}
                {place.user_role}{" "}
              </Text>
            </View>

            <Text
              style={{ marginHorizontal: 80, fontSize: 12, fontWeight: "100" }}
            >
              {" "}
              {place.posted_day}{" "}
            </Text>
          </View>
          <Text
            style={{
              marginVertical: 20,
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              fontSize: 12,
              marginRight: 20,
            }}
          >
            {place.comment}
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text
              style={{
                fontSize: 20,
                marginHorizontal: 10,
                fontSize: 12,
                fontWeight: "100",
              }}
            >
              <Icon name="hearto" size={12} color="blue" />{" "}
              {place.liked_persons}
            </Text>
            <Text
              style={{
                marginLeft: 140,
                fontSize: 12,
                color: "#FF8D1A",
                textDecorationColor: "#FF8D1A",
                textDecorationLine: "underline",
              }}
            >
              <Icon name="dingding" size={12} /> Хариулах
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
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
      <View style={{ backgroundColor: "#F5F5F5", borderRadius: 40 }}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          data={CommentData}
          renderItem={({ item }) => <Cart place={item} />}
        />
      </View>
    </View>
  );
};

export default ProductComment;

const styles = StyleSheet.create({});
