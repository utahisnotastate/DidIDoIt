import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default function Header() {
    return (
        <View style={styles.container}>
            <Text>History</Text>
        </View>
    )
}