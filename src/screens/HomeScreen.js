import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
  ImageBackground,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={css.container}>
      <TouchableOpacity onPress={() => Alert.alert("ComingSoon")}>
        <ImageBackground
          source={require("../../assets/img/CharityIMG.png")}
          style={{
            resizeMode: "contain",
            flex: 0.5,
            borderRadius: 40,
            top: 50,
            width: 290,
            height: 290,
          }}
        >
          <View style={{ margin: 80 }}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 56,

                  color: "white",
                }}
              >
                dem
              </Text>
              <Text
                style={{
                  fontSize: 56,

                  color: "blue",
                }}
              >
                +
              </Text>
            </View>
            <Text
              style={{
                fontSize: 22,
                color: "white",
                textAlign: "center",
              }}
            >
              Charity
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Bussiness")}>
        <ImageBackground
          source={require("../../assets/img/BussinessIMG.png")}
          style={{
            resizeMode: "contain",
            flex: 0.5,
            width: 290,
            height: 290,
            borderRadius: 30,
          }}
        >
          <View style={{ margin: 80 }}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text
                style={{
                  fontSize: 56,

                  color: "white",
                }}
              >
                dem
              </Text>
              <Text
                style={{
                  fontSize: 56,

                  color: "orange",
                }}
              >
                +
              </Text>
            </View>
            <Text
              style={{
                fontSize: 22,
                color: "white",
                textAlign: "center",
              }}
            >
              Bussiness
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const css = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
});
