import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Header/Header";
import History from "./History/History";
import AddHistory from "./AddHistory/AddHistory";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    }
})

export default function DidIDoIt() {
    return (
        <View style={styles.container}>
            <Header />
            <History />
            <AddHistory />
        </View>
    )
}