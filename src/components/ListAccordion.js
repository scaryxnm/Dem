import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";

const ListAccordion = () => {
  const [expanded, setExpanded] = React.useState();
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section>
      <List.Accordion
        theme={{
          colors: {
            primary: "#FF8D1A",
          },
        }}
        title="dem+ гэж юу вэ?"
        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
        left={(props) => <List.Icon {...props} icon="cloud" />}
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
        title="Хэрхэн төсөлд санхүүжилт оруулах вэ?"
        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
        left={(props) => <List.Icon {...props} icon="cloud" />}
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
  );
};

export default ListAccordion;

const styles = StyleSheet.create({});
