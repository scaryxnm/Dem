import * as React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import { List } from "react-native-paper";
import ListAccordion from "../../components/ListAccordion";
import MyBackButton from "../../components/MyBackButton";
import MyNotiffButton from "../../components/MyNotiffButton";

const Questions = ({ navigation }) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <ScrollView>
      <Header
        backgroundImage={require("../../../assets/img/BussinessIMG.png")}
        backgroundImageStyle={{ width: 500, height: 200 }}
        containerStyle={{ height: 150 }}
        centerComponent={{
          text: "Асуулт хариулт",
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
        <View style={{ marginTop: 20 }}>
          <ListAccordion />
        </View>
      </View>
    </ScrollView>
  );
};

export default Questions;

const styles = StyleSheet.create({});
