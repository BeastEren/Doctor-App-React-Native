import { Alert, StyleSheet, Text, View } from 'react-native';
import { Foundation, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import React from 'react';

export default function NavBar() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.element1}>
                <Foundation
                    name="list"
                    size={25}
                    color="white"
                />
                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 22 }}>IVF SOLUTION</Text>
            </View>

            <View style={styles.element2}>
                <FontAwesome
                    name="bell"
                    size={28}
                    color="#ffac32"
                    onPress={() => {
                        Alert.alert('No Notification');
                    }} />
                <MaterialIcons
                    name="account-circle"
                    size={28}
                    color="white"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 999,
        width: '100%',
        flexDirection: 'row',
        paddingTop: 32,
        marginBottom: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    element1: {
        width: 175,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    element2: {
        width: 72,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})