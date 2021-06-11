import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../components/MyBackButton";
import MySearchInput from "../components/MySearchInput";
import ProductData from "../data/ProductData";

const MySearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  const Cart = ({ data }) => {
    return (
      <View style={{ backgroundColor: "#F5F5F5", borderRadius: 40 }}>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
            backgroundColor: "white",
            marginHorizontal: 10,
            borderRadius: 20,
            top: 10,
            height: 144,
          }}
        >
          <Image
            source={data.photo_url}
            style={{
              width: 110,
              height: 144,
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 18, color: "#3389EE", margin: 10 }}>
              {" "}
              {data.name}{" "}
            </Text>
            <Text style={{ fontSize: 12, marginHorizontal: 10 }}>
              {" "}
              Цугласан: {data.collected_budget}{" "}
            </Text>
            <Text style={{ fontSize: 12, margin: 10 }}>
              {" "}
              Зорилт: {data.goal_budget}{" "}
            </Text>
            <Text style={{ fontSize: 12, color: "#FF8D1A", margin: 10 }}>
              {" "}
              {data.end_date}{" "}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <Header
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        backgroundImage={require("../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Hailt",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
      />
      <MySearchInput />
      <FlatList
        contentContainerStyle={{ paddingBottom: 20 }}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        data={ProductData}
        renderItem={({ item }) => <Cart data={item} />}
      />
    </View>
  );
};

export default MySearchScreen;

const styles = StyleSheet.create({});
