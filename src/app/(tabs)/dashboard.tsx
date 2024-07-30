import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cardsBackgroundColor } from '@/constants/Colors'
import HealthDetailsCard from '@/components/HealthDetailsCard'

export default function dashboard() {
    return (
        <View style={styles.container}>
            <HealthDetailsCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: cardsBackgroundColor,
    },

})