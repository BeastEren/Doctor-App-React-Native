import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
    return (
        <View style={styles.wrapper}>

            <TouchableOpacity style={styles.iconWrapper}>
                <AntDesign name="search1" size={25} color="white" />
            </TouchableOpacity>

            <View style={styles.InputWrapper}>
                <TextInput style={{ fontSize: 20 }} placeholder='Enter your search here' />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 999,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 15,
    },
    iconWrapper: {
        backgroundColor: '#40cbb4',
        padding: 10,
        borderRadius: 15,
    },
    InputWrapper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})