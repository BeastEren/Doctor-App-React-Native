import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DocDetails from './DocDetails'

const doc = require('@/../../assets/images/doc1.jpg')
const docName = "Dr. Leonard Compbell"
const specialized = 'Cardiologist'
const experience_Years = '6'

export default function PreviousDoctors() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.nearbyDocText}>Recently Visited Doctor</Text>
      <View style={{ marginTop: 20 }}>
        <DocDetails docName={docName} specialized={specialized} experience_Years={experience_Years} image={doc} />
        <DocDetails docName={docName} specialized={specialized} experience_Years={experience_Years} image={doc} />
      </View>
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
    elevation: 10,
  },
  nearbyDocText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
})