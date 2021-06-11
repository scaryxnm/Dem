import React, { useContext } from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import MyBackButton from "../../components/MyBackButton";
import MySocialButton from "../../components/MySocialButton";
import AntDesign from "react-native-vector-icons/AntDesign";
import UserContext from "../../UserContex.js/UserContex";
import ReadMore from "@fawazahmed/react-native-read-more";
import { LinearProgress, Header } from "react-native-elements";
import MyButton from "../../components/MyButton";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MyNotiffButton from "../../components/MyNotiffButton";

const ProductDetail = ({ navigation, route }) => {
  const state = useContext(UserContext);
  const data = route.params;
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header
        backgroundImage={data.photo_url}
        backgroundImageStyle={{ width: 500, height: 250 }}
        containerStyle={{ height: 200 }}
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
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            margin: 40,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              marginHorizontal: 35,
              color: "#3389EE",
              fontWeight: "bold",
            }}
          >
            {data.name}
          </Text>
          <AntDesign name="heart" size={27} color="#FF8D1A" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              marginHorizontal: 10,
            }}
            source={data.user_profile}
          />
          <View>
            {/* {state.userName}  */}
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {data.created_user_name}
            </Text>
            <Text
              style={{
                marginHorizontal: 5,
                fontSize: 12,
                marginVertical: 10,
              }}
            >
              {data.user_role}
            </Text>
          </View>
          <View style={{ marginHorizontal: 80 }}>
            <Text style={{ fontSize: 12 }}>
              <AntDesign name="tag" size={15} /> Төрөл 17
            </Text>
            <Text style={{ fontSize: 12, marginVertical: 8 }}>
              <AntDesign name="pushpin" size={15} /> {data.location}
            </Text>
          </View>
        </View>
        <View style={{ margin: 40 }}>
          <ReadMore
            numberOfLines={4}
            style={{ fontSize: 12, marginRight: 20 }}
            seeMoreText="Дэлгэрэнгүй"
            seeMoreStyle={{ color: "blue" }}
            seeLessText="Хураах"
            seeLessStyle={{ color: "blue" }}
          >
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </ReadMore>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ActivityProduct", data)}
          >
            <View style={css.register}>
              <Text
                style={{
                  color: "#FF8D1A",
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Үйл явц
              </Text>
              <SimpleLineIcons
                name="arrow-right-circle"
                color="orange"
                size={15}
                style={{ marginHorizontal: 5 }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductComment", data)}
          >
            <View style={css.register}>
              <Text
                style={{ color: "#FF8D1A", fontSize: 16, fontWeight: "bold" }}
              >
                Сэтгэгдэл
              </Text>
              <SimpleLineIcons
                name="arrow-right-circle"
                color="orange"
                size={15}
                style={{ marginHorizontal: 5 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 30 }}>
          <View style={{ flexDirection: "row", margin: 30 }}>
            <Text
              style={{
                fontSize: 18,
                marginHorizontal: 70,
                marginLeft: 80,
                color: "#3389EE",
              }}
            >
              {data.collected_budget}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 50,
                color: "#FF8D1A",
              }}
            >
              {data.goal_budget}
            </Text>
          </View>
          <LinearProgress
            color="#3389EE"
            style={{
              backgroundColor: "#FFC285",
              height: 5,
              width: 315,
              alignSelf: "center",
              alignContent: "center",
              borderRadius: 50,
            }}
            value={0.36}
            variant="determinate"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ margin: 50 }}>
            <Text style={{ marginRight: 10, fontSize: 14 }}>Хандивлагч</Text>
            <Text
              style={{ textAlign: "center", fontSize: 24, color: "#FF8D1A" }}
            >
              42
            </Text>
          </View>
          <View style={{ margin: 50 }}>
            <Text style={{ marginLeft: 30, fontSize: 14 }}>Үлдсэн хоног</Text>
            <Text
              style={{ textAlign: "center", fontSize: 24, color: "#FF8D1A" }}
            >
              17
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#F5F5F5",
          borderRadius: 40,
          shadowColor: "#000000",
          shadowOpacity: 0.2,
          flex: 1,
        }}
      >
        <View style={{}}>
          <MyButton
            title={"Хандив өгөх"}
            onPress={() => navigation.navigate("Paying", data)}
            style={{ backgroundColor: "#FF8D1A", alignItems: "center" }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const css = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  register: {
    fontSize: 16,
    height: 50,
    width: 150,
    marginHorizontal: 10,
    marginLeft: 35,
    borderRadius: 10,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    borderColor: "#FF8D1A",
    flexDirection: "row",
  },
});
