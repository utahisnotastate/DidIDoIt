import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});

export default function AddHistory() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={modalVisible}>
        <View>
          <Text>Modal</Text>
          <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
            <Text>Close</Text>
          </TouchableHighlight>
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
