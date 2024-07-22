import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const doc = require('@/../../assets/images/doc1.jpg')
const docName = "Dr. Leonard Compbell"
const specialized = 'Cardiologist'
const experience_Years = 6

export default function NearbyDoctors() {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.nearbyDocText}>Nearby Doctors</Text>

            <Pressable style={[styles.docInfo, { marginTop: 40 }]}>
                <Image
                    source={doc}
                    style={styles.docProfilePic}
                />
                <View>
                    <Text style={styles.docName}>{docName}</Text>
                    <Text style={styles.docDetails}>{specialized} - {experience_Years} years of exp.</Text>
                </View>
            </Pressable>

            <Pressable style={styles.docInfo}>
                <Image
                    source={doc}
                    style={styles.docProfilePic}
                />
                <View>
                    <Text style={styles.docName}>{docName}</Text>
                    <Text style={styles.docDetails}>{specialized} - {experience_Years} years of exp.</Text>
                </View>
            </Pressable>

            <Pressable style={styles.docInfo}>
                <Image
                    source={doc}
                    style={styles.docProfilePic}
                />
                <View>
                    <Text style={styles.docName}>{docName}</Text>
                    <Text style={styles.docDetails}>{specialized} - {experience_Years} years of exp.</Text>
                </View>
            </Pressable>

        </View >
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 18,
        width: '95%',
        backgroundColor: '#f5f5f5',
    },
    nearbyDocText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    docInfo: {
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20,
        height: 72,
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    docProfilePic: {
        marginLeft: 20,
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    docName: {
        marginLeft: 10,
        fontSize: 17,
        fontWeight: 'bold',
    },
    docDetails: {
        marginLeft: 10,
        fontSize: 12,
    },
})