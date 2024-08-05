import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { backgroundColorBottom, backgroundColorTop, cardsBackgroundColor } from '@/constants/Colors'
import HealthDetailsCard from '@/components/HealthDetailsCard'
import { Fontisto, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from '@/components/SearchBar';
import NavBar from '@/components/NavBar';
import { LinearGradient } from 'expo-linear-gradient';

const icon1 = <Fontisto name="blood-drop" size={38} color="red" />
const icon2 = <FontAwesome name="heartbeat" size={37.4} color="red" />
const icon3 = <MaterialCommunityIcons name="blood-bag" size={38} color="red" />
const icon4 = <Fontisto name="blood" size={38} color="red" />

const text1 = 'Blood Status'
const text2 = 'Heart Rate'
const text3 = 'Glucose Level'
const text4 = 'Blood Pressure'

const rate1 = '100/70'
const rate2 = '78bmp'
const rate3 = '78-92'
const rate4 = '100mg/dl'

export default function dashboard() {
    return (
        <View>
            <LinearGradient colors={[backgroundColorTop, backgroundColorBottom]} style={styles.container}>
                <NavBar />
                <SearchBar />

                <View style={styles.cardWrapper}>
                    <HealthDetailsCard
                        icon={icon1}
                        text={text1}
                        displayDetail={rate1}
                        fontSizeOfText={11.2}
                        paddingHorizontalOfText={5} />
                    <HealthDetailsCard
                        icon={icon2}
                        text={text2}
                        displayDetail={rate2}
                        fontSizeOfText={11.2}
                        paddingHorizontalOfText={5} />
                    <HealthDetailsCard
                        icon={icon3}
                        text={text3}
                        displayDetail={rate3}
                        fontSizeOfText={11.2}
                        paddingHorizontalOfText={5} />
                    <HealthDetailsCard
                        icon={icon4}
                        text={text4}
                        displayDetail={rate4}
                        fontSizeOfText={11}
                        paddingHorizontalOfText={2} />
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: cardsBackgroundColor,
        width: '100%',
        height: 220,
    },
    cardWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 23,
        marginTop: '5%',
        width: '100%',
        justifyContent: 'center',
        gap:7,
        height: '9%',
    },
})