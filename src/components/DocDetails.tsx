import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

type propType = {
    docName: string,
    specialized: string,
    experience_Years: string,
    image: any
}

export default function DocDetails(prop: propType) {
    return (
        <Pressable style={styles.docInfo}>
            <Image
                source={prop.image}
                style={styles.docProfilePic}
            />
            <View>
                <Text style={styles.docName}>{prop.docName}</Text>
                <Text style={styles.docDetails}>{prop.specialized} - {prop.experience_Years} years of exp.</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    docInfo: {
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20,
        height: 72,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 20,
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