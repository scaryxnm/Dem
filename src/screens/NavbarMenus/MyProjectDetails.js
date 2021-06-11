import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { Header } from "react-native-elements";
import MyBackButton from "../../components/MyBackButton";
import MyButton from "../../components/MyButton";
import MyNotiffButton from "../../components/MyNotiffButton";
import MyTextInput from "../../components/MyTextInput";
import productData from "../../data/ProductData";

const MyProjectDetails = ({ navigation }) => {
  const Cart = ({ place }) => {
    return (
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,

          marginVertical: 15,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Image
              source={place.photo_url}
              style={{
                width: 150,
                height: 180,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              }}
            />
            <View
              style={{
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  margin: 10,
                  color: "#5A5959",
                }}
              >
                {place.name}
              </Text>

              <Text style={styles.fontCss}>
                Таны оруулсан хандив : {place.user_cash_amount}{" "}
              </Text>

              <Text style={styles.fontCss}>
                Нийт цугласан хандив : {place.collected_budget}
              </Text>

              <Text style={styles.fontCss}>
                Зорилтот дүн : {place.goal_budget}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: "#FF8D1A",
                  marginVertical: 15,
                  marginHorizontal: 10,
                }}
              >
                {place.end_date}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <Header
        backgroundImage={require("../../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Миний төсөл",
          style: { color: "#FFFFFF", fontSize: 24, fontWeight: "bold" },
        }}
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
        <ScrollView style={{ marginVertical: 15, marginHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              alignSelf: "center",
              marginVertical: 20,
            }}
          >
            Таны зарласан төслүүд
          </Text>
          <FlatList
            horizontal={false}
            data={productData}
            renderItem={({ item }) => <Cart place={item} />}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default MyProjectDetails;

const styles = StyleSheet.create({ fontCss: { fontSize: 13, margin: 5 } });
