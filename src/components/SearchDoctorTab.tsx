import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons';

export default function SearchDoctorTab() {
    return (
        <View style={styles.wrapper}>
            <Pressable style={styles.speciality}>
                <View style={styles.icon}>
                    <AntDesign name="search1" size={20} color="#b1d7e4" />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.headText}>Speciality</Text>
                    <Text style={styles.subText}>All Speciality</Text>
                </View>
            </Pressable>

            <Pressable style={styles.speciality}>
                <View style={styles.icon}>
                    <EvilIcons name="location" size={30} color="#b1d7e4" />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.headText}>Location</Text>
                    <Text style={styles.subText}>New York, NY, USA</Text>
                </View>
            </Pressable>

            <Pressable style={styles.speciality}>
                <View style={styles.icon}>
                    <AntDesign name="calendar" size={22} color="#b1d7e4" />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.headText}>Availability</Text>
                    <Text style={styles.subText}>Today, 26 Nov</Text>
                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 31,
    },
    speciality: {
        alignItems: 'center',
        height: 68,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#b1d7e4',
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10,
        elevation: 10,
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        backgroundColor: '#f5f5f5'
    },
    headText: {

    },
    subText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})

// #b1d7e4