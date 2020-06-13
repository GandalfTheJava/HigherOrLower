import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                Higher or Lower?
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#f4f4f4',
        marginBottom: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
})