import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

interface HistoryItem {
  id: string;
  title: string;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 9,
    flexDirection: "column",
    backgroundColor: "lightgray",
  },
  item: {
    margin: 10,
    backgroundColor: "white",
  },
});

export default function History() {
  const Item = (props: HistoryItem) => (
    <View style={styles.item}>
      <Text>I {props.title} @ 12:30:12s pm X</Text>
      <Text>Add Note</Text>
    </View>
  );
  /* 
FOR FLATLIST renderItem() has that weird Emotion type. Apparently the FlatList component has some issues with typescript. 
After searching the Emotion was found to solve the issues. Please refer to: https://stackoverflow.com/questions/52701665/typescript-react-native-flatlist-how-to-give-renderitem-the-correct-type-of-it
  */

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }: { item: Emotion }) => (
          <Item id={item.id} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
