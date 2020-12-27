import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
  FlatList,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
/*

THIS SHOULD BE CALLED ACTIVITYLIST
The purpose of this component is to display all the activities the user has entered into the app. 
When the user presses the item, it will add it to the history and show up in the activity log. 

*/

interface ActivityItem {
  id: string;
  title: string;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Locked Car",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Locked Home Door",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Took medicine",
  },
];
export default function ActivityList() {
  const activitylist = useSelector((state) => state.activitylist);
  const dispatch = useDispatch();

  const addActivityToHistoryListAndCloseModal = (activity: string) => {
    dispatch({
      type: "ADD_ACTIVITY_TO_HISTORY_LIST",
      item: { id: Date.now().toString(), title: activity },
    });
  };

  const ActivityItem = (props: ActivityItem) => (
    <View>
      <TouchableHighlight
        onPress={() => addActivityToHistoryListAndCloseModal(props.title)}
      >
        <View>
          <Text>{props.title}</Text>
          <Text>I just did this!</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
  return (
    <View>
      <FlatList
        data={activitylist}
        renderItem={({ item }: { item: Emotion }) => (
          <ActivityItem id={item.id} title={item.title} />
        )}
      />
    </View>
  );
}
