import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { backgroundColorBottom, backgroundColorTop, borderColor } from '@/constants/Colors'

type propType = {
  icon: any,
  text: string,
  displayDetail: string,
  fontSizeOfText: number,
  paddingHorizontalOfText: number,
}

export default function HealthDetailsCard(prop: propType) {
  return (
    <View style={styles.wrapper} >
      {prop.icon}
      <Text style={{ fontSize: prop.fontSizeOfText, fontWeight: 'bold', paddingHorizontal: prop.paddingHorizontalOfText }}>{prop.text}</Text>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#40cbb4' }}>{prop.displayDetail}</Text>
      <LinearGradient
        colors={[backgroundColorTop, backgroundColorBottom, borderColor]}
        style={styles.loewTab}
      /> 
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
    height: 120,
    width: 86,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: borderColor
  },
  loewTab: {
    width: '100%',
    height: 16,
    backgroundColor: '#1d95d2',
    borderRadius: 15,
    position: 'relative',
    marginTop: 9.1,
  }
})