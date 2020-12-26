import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

/*
This component is used when the user goes to add a new actity to his log, and he hasn't already created it.
The user simply writes a text description of the activity and pressed the add to log
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});
export default function CreateActivity() {
  const dispatch = useDispatch();
  const [newactivity, setNewActivity] = useState("");

  const createNewActivity = () => {
    Alert.alert("test");
  };

  const addNewActivityToList = (activity) => {
    dispatch({
      type: "CREATE_NEW_ACTIVITY",
      item: { id: Date.now().toString(), title: activity },
    });
    setNewActivity("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => setNewActivity(text)}
        style={{ height: 40, borderColor: "gray", borderWidth: 1, flex: 3 }}
        value={newactivity}
      />
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10,
          flex: 1,
          height: "auto",
        }}
        onPress={() => addNewActivityToList(newactivity)}
      >
        <Text>Create and add to log2!</Text>
      </TouchableOpacity>
    </View>
  );
}
