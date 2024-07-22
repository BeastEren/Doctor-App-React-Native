import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/components/Button';
import NearbyDoctors from '@/components/NearbyDoctors';
import SearchDoctorTab from '@/components/SearchDoctorTab';

export default function search() {
    return (
        <ScrollView >
            <LinearGradient colors={['#eff8ff', '#e2e1f1']} style={styles.wrapper}>
                <View style={styles.topBar}>
                    <Text style={styles.serchText}>Search Doctor</Text>
                    <Pressable>
                        <Entypo name="circle-with-cross" size={25} color="black" />
                    </Pressable>
                </View>

                <SearchDoctorTab />

                <View style={{ alignItems: 'center' }}>
                    <View style={styles.findDocButton}>
                        <Button text={"Find Doctor"} onPress={() => {
                            router.push('/(tabs)/search');
                        }} />
                    </View>
                </View>

                <Pressable style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </Pressable>

                <View style={{ alignItems: 'center', marginTop: 15 }}>
                    <NearbyDoctors />
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // Nothing came to mind
        paddingTop: 32
    },
    topBar: {
        margin: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems:'center',
    },
    serchText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    findDocButton: {
        marginTop: 20,
        width: '88%',
        // backgroundColor: 'black'
    },
    cancelButton: {
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black'
    },
    cancelText: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 18,
    },
})