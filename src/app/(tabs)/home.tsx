import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { backgroundColorBottom, backgroundColorTop } from '@/constants/Colors'

export default function home() {
    return (
        <View>
            <LinearGradient colors={[backgroundColorTop, backgroundColorBottom]} style={styles.wrapper}>
                <Text>home</Text>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})