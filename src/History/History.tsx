import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View, FlatList } from "react-native";

interface HistoryItem {
  id: string;
  title: string;
}

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
  const history = useSelector((state) => state.history);

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
        data={history}
        renderItem={({ item }: { item: Emotion }) => (
          <Item id={item.id} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
