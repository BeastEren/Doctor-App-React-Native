import { Pressable, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import { backgroundColorTop, backgroundColorBottom, bottonColor, cardsBackgroundColor, borderColor } from '@/constants/Colors'
import Button from '@/components/Button'
import { router } from 'expo-router'
export default function login() {
  return (
    <ScrollView style={styles.wrapper}>
      <NavBar />
      <SearchBar />
      <LinearGradient
        colors={[backgroundColorTop, backgroundColorBottom]}
        style={styles.topBar}
      />
      <LinearGradient
        colors={[backgroundColorBottom, backgroundColorTop]}
        style={styles.footBar}
      />

      <View style={styles.logInSetter}>
        <Text style={styles.logo}>SignUp</Text>

        <View>
          <Text style={{ color: 'Black', paddingBottom: 5 }}>Name</Text>
          <TextInput style={styles.inputBox} placeholder='Enter your Name' />

          <Text style={{ color: 'Black', paddingBottom: 5 }}>Phone Number</Text>
          <TextInput style={styles.inputBox} placeholder='Enter your Phone Number' />

          <Text style={{ color: 'Black', paddingBottom: 5 }}>Email ID</Text>
          <TextInput style={styles.inputBox} placeholder='Enter your Email' />

          <Text style={{ color: 'Black', paddingBottom: 5 }}>Password</Text>
          <TextInput style={styles.inputBox} placeholder='Enter your Password' />

          <Text style={{ color: 'Black', paddingBottom: 5 }}>Confirm Password</Text>
          <TextInput style={styles.inputBox} placeholder='Confirm your Password' />
        </View>

        <View style={{
          width: '60%',
        }}>
          <Button onPress={() => {
            router.push('/login');
          }} text="Login" />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffff'
  },
  topBar: {
    marginTop: -150,
    height: 350,
    borderBottomRightRadius: 150,
    backgroundColor: bottonColor,
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
  footBar: {
    position: 'absolute',
    marginTop: 500,
    width: '100%',
    height: '44%',
    borderTopLeftRadius: 150,
  }
})