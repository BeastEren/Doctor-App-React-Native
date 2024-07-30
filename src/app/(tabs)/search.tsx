import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Entypo, AntDesign, EvilIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import Button from '@/components/Button';
import NearbyDoctors from '@/components/NearbyDoctors';
import SearchDoctorTab from '@/components/SearchDoctorTab';
import PreviousDoctors from '@/components/PreviousDoctors';
import Test from '@/components/Test';

const dataList1 = [
    { value: 'sourav', code: '3123' },
    { value: 'so12312urav', code: '31qwe23' },
    { value: 'sour233av', code: '31wqq23' },
    { value: 'so123urav', code: '31qwe23' },
]
const dataList2 = [
    { value: 'Rishav', code: '3123' },
    { value: 'Rish23av', code: '312123' },
    { value: 'Ris234hav', code: '31323' },
    { value: 'Ri432shav', code: '311223' },
]
const dataList3 = [
    { value: 'Avijoy', code: '3123' },
    { value: 'Avijasdzcxoy', code: '314a123' },
    { value: 'Avijzxoy', code: '313s23' },
    { value: 'Aviaaq1joy', code: '31qwa23' },
]
const Speciality = <AntDesign name="search1" size={20} color="#b1d7e4" />;
const Location = <EvilIcons name="location" size={30} color="#b1d7e4" />;
const Calendar = <AntDesign name="calendar" size={22} color="#b1d7e4" />;


export default function search() {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <ScrollView >
            <LinearGradient colors={['#eff8ff', '#e2e1f1']} style={styles.wrapper}>
                <View style={styles.topBar}>
                    <Text style={styles.serchText}>Search Doctor</Text>
                    <Pressable>
                        <Entypo name="circle-with-cross" size={25} color="black" />
                    </Pressable>
                </View>

                <SearchDoctorTab name='Speciality' dataList={dataList1} icon={Speciality} />
                {/* <Test name='Location' dataList={dataList2} icon={Location} /> */}
                <SearchDoctorTab name='Location' dataList={dataList2} icon={Location} />
                <SearchDoctorTab name='Calendar' dataList={dataList3} icon={Calendar} />

                <View style={{ alignItems: 'center' }}>
                    <View style={styles.findDocButton}>
                        <Button text={"Find Doctor"} onPress={() => {
                            router.push('/(tabs)/search');
                            setIsClicked(!isClicked);
                        }} />
                    </View>
                </View>

                <Pressable
                    style={styles.cancelButton}
                    onPress={() => { }}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </Pressable>

                {isClicked ? (
                    <>
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <NearbyDoctors />
                        </View>
                    </>
                ) : (
                    <>
                        <View style={{ alignItems: 'center', marginTop: 15 }}>
                            <PreviousDoctors />
                        </View>
                    </>
                )}

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