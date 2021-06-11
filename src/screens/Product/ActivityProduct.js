import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyBackButton from "../../components/MyBackButton";
import MySocialButton from "../../components/MySocialButton";
import { List } from "react-native-paper";
import ListAccordion from "../../components/ListAccordion";
import { Header } from "react-native-elements";
import MyCustomHeader from "../../components/MyCustomHeader";

const Tab = createMaterialTopTabNavigator();

function Activite() {
  return (
    <View>
      <Text>ActivityProduct</Text>
    </View>
  );
}

function Why() {
  return (
    <View>
      <Text style={{ margin: 30, fontWeight: "bold", fontSize: 16 }}>
        Тайлбар
      </Text>
      <Text style={{ margin: 30 }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </Text>
    </View>
  );
}

function Answering() {
  return (
    <ScrollView>
      <List.Section>
        <List.Accordion
          theme={{
            colors: {
              primary: "#FF8D1A",
            },
          }}
          title="Асуулт 1"
          titleStyle={{ fontSize: 16, fontWeight: "bold" }}
          left={(props) => <List.Icon {...props} icon="cloud-question" />}
        >
          <List.Item
            descriptionNumberOfLines={30}
            descriptionStyle={{ marginRight: 40 }}
            description="Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. text ever since the 
          1500s, when an unknown printer took a galley 
          of type and scrambled it to make a type specimen 
          book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially 
          unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </List.Accordion>
        <List.Accordion
          theme={{
            colors: {
              primary: "#FF8D1A",
            },
          }}
          titleNumberOfLines={2}
          title="Асуулт 2"
          titleStyle={{ fontSize: 16, fontWeight: "bold" }}
          left={(props) => <List.Icon {...props} icon="cloud-question" />}
        >
          <List.Item
            descriptionNumberOfLines={30}
            descriptionStyle={{ marginRight: 40 }}
            description="Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. text ever since the 
          1500s, when an unknown printer took a galley 
          of type and scrambled it to make a type specimen 
          book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially 
          unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </List.Accordion>
        <List.Accordion
          theme={{
            colors: {
              primary: "#FF8D1A",
            },
          }}
          titleNumberOfLines={2}
          title="Асуулт 3"
          titleStyle={{ fontSize: 16, fontWeight: "bold" }}
          left={(props) => <List.Icon {...props} icon="cloud-question" />}
        >
          <List.Item
            descriptionNumberOfLines={30}
            descriptionStyle={{ marginRight: 40 }}
            description="Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. text ever since the 
          1500s, when an unknown printer took a galley 
          of type and scrambled it to make a type specimen 
          book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, 
          remaining essentially 
          unchanged. 
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing 
          software like Aldus PageMaker including versions of Lorem Ipsum."
          />
        </List.Accordion>
      </List.Section>
    </ScrollView>
  );
}

export default function ActivityProduct({ route, navigation }) {
  const data = route.params;
  return (
    <View style={{ flex: 1 }}>
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
        centerContainerStyle={{ flex: 3 }}
        leftComponent={<MyBackButton onPress={() => navigation.goBack()} />}
        rightComponent={<MySocialButton />}
      />

      <View style={{ flex: 1, bottom: 20 }}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: { fontSize: 12 },
            style: {
              borderTopLeftRadius: 50,
              borderTopEndRadius: 50,
              backgroundColor: "#E2E2E2",
            },
            tabStyle: {
              padding: 12,
            },
            activeTintColor: "#FF8D1A",
            inactiveTintColor: "#161616",
            indicatorStyle: {
              height: null,
              top: 0,
              borderRadius: 40,
              backgroundColor: "white",
            },
          }}
        >
          <Tab.Screen name="Үйл явц" component={Activite} />
          <Tab.Screen name="Яагаад сонгох ёстой вэ?" component={Why} />
          <Tab.Screen name="Асуулт, хариулт" component={Answering} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const css = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    marginHorizontal: 15,
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
  },
});
