import React from 'react';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import { StyleSheet, Text, View } from 'react-native';
import DidIDoIt from "./src/DidIDoIt";

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
})

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <DidIDoIt />
    </SafeAreaView>
      
  );
}
