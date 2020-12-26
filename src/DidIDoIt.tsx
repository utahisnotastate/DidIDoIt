import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header/Header";
import History from "./History/History";
import AddActivity from "./AddActivity/AddActivity";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});

export default function DidIDoIt() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <History />
        <AddActivity />
      </View>
    </Provider>
  );
}
