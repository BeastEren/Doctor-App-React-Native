import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import { backgroundColorTop, backgroundColorBottom, cardsBackgroundColor, borderColor } from '@/constants/Colors'
import Button from '@/components/Button'
import { router } from 'expo-router'
export default function login() {
    return (
        <View style={styles.wrapper}>
            <LinearGradient
                colors={[backgroundColorTop, backgroundColorBottom]}
                style={styles.topBar}
            >
                <NavBar />
            </LinearGradient>
            <LinearGradient
                colors={[backgroundColorBottom, backgroundColorTop]}
                style={styles.footBar}
            />
            <View style={styles.logInSetter}>
                <Text style={styles.logo}>Login</Text>
                <View>
                    <Text style={{ color: 'Black', paddingBottom: 5 }}>Email ID/Phone number</Text>
                    <TextInput style={styles.inputBox} placeholder='Enter your Email/Phone number' />

                    <Text style={{ color: 'Black', paddingBottom: 5 }}>Password</Text>
                    <TextInput style={styles.inputBox} placeholder='Enter your Password' />
                </View>
                <Pressable onPress={() => {
                    router.push('/forgotPassword')
                }}>
                    <Text style={{}}>Forgot password?</Text>
                </Pressable>
                <View style={{
                    width: '60%',
                }}>
                    <Button onPress={() => {
                        router.push('/(tabs)/home');
                    }} text="Login" />
                </View>
                <View style={styles.orView}>
                    <View style={styles.subOrView}></View>

                    <Text style={{ marginTop: -5, paddingHorizontal: 5 }}>Or</Text>

                    <View style={styles.subOrView}></View>
                </View>
                <Pressable
                    onPress={() => {
                        router.push('/signup');
                    }}
                    style={styles.signupText}
                >
                    <Text style={{ color: "#0091FF" }}>Signup</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
    },
    topBar: {
        height: 350,
        borderBottomRightRadius: 150,
        backgroundColor: '#abd8e8',
    },
    logInSetter: {
        marginTop: -150,
        alignSelf: 'center',
        elevation: 40,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 325,
        borderWidth: 3,
        borderColor: borderColor,
        backgroundColor: cardsBackgroundColor,
        alignItems: 'center',
        marginBottom: 50,
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    inputBox: {
        borderWidth: 2,
        borderRadius: 12,
        borderColor: cardsBackgroundColor,
        marginBottom: 10,
        padding: 10,
        width: 250,
        backgroundColor: 'white',
        elevation: 5,
    },
    orView: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    subOrView: {
        width: '35%',
        borderTopWidth: 1,
        borderColor: borderColor,
    },
    signupText: {
        marginTop: 24,
        marginBottom: 5,
    },
    footBar: {
        position: 'absolute',
        marginTop: 500,
        width: '100%',
        height: '43%',
        borderTopLeftRadius: 150,
    }
})