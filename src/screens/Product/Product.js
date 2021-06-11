import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import ProductData from "../../data/ProductData";
import { useNavigation } from "@react-navigation/native";
const Product = () => {
  const navigation = useNavigation();

  const Cart = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetail", data)}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            marginVertical: 20,
          }}
        >
          <Image
            source={data.photo_url}
            style={{ width: 335, height: 224, borderRadius: 20 }}
          />
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#3389EE",
              alignSelf: "center",
              marginVertical: 30,
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginRight: 25,
              marginLeft: 25,
              marginBottom: 25,
            }}
          >
            {data.content}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ left: 40 }}>
              <Text style={{ fontSize: 14 }}>Цугласан</Text>
              <Text
                style={{
                  fontSize: 24,
                  color: "#3389EE",
                }}
              >
                {data.collected_budget}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-end",
                right: 40,
              }}
            >
              <Text style={{ fontSize: 14 }}>Төлөвлөгөө</Text>
              <Text style={{ fontSize: 24, color: "#FF8D1A" }}>
                {data.goal_budget}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: "#FF8D1A",
              alignSelf: "center",
              margin: 20,
            }}
          >
            {data.end_date}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ marginHorizontal: 40 }}>
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

export default Product;

const styles = StyleSheet.create({});
