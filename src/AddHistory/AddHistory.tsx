import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
} from "react-native";
import HistoryList from "./HistoryList/HistoryList";
import CreateActivity from "./CreateActivity/CreateActivity";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
/*
The purpose of this component is when the user is in the main app window and 
press the button to add a new activity, this modal will pop up. This will alllow
them to either choose an activity they have done before, or create a new one
*/
export default function AddHistory() {
  const [modalVisible, setModalVisible] = useState(false);

  const CloseModalButton = () => (
    <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
      <Text>Close</Text>
    </TouchableHighlight>
  );
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View>
          <View>
            <CloseModalButton />
          </View>
          <View>
            <HistoryList />
          </View>
          <View>
            <CreateActivity />
          </View>
        </View>
      </Modal>
      <View>
        <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
          <Text>Add Something New</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
