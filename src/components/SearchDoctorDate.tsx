import { Pressable, StyleSheet, Text, View, Modal } from 'react-native';
import { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';

type propType = {
    name: string,
    icon: any
}

export default function SearchDoctorDate(prop: propType) {

    // const today = new Date();
    // const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD')
    const [selectedData, setSelectedData] = useState('2024/12/12');
    const [isClicked, setIsClicked] = useState(false);

    function handleChange(propDate: any) {
        setSelectedData(propDate)
    }
    return (
        <View style={styles.wrapper}>
            <Pressable
                style={styles.speciality}
                onPress={() => {
                    setIsClicked(!isClicked);
                }}>
                <View style={styles.icon}>
                    {prop.icon}
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{}}>{prop.name}</Text>
                    <Text style={styles.subText}>{selectedData}</Text>
                </View>
            </Pressable>
            {isClicked ? (
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={true}
                >
                    <View style={styles.dropdown}>
                        <DatePicker
                            mode='calendar'
                            // minimumDate={startDate}
                            selected={selectedData}
                            onDateChange={handleChange}
                        />
                        <Pressable
                            style={styles.canbut}
                            onPress={() => {
                                setIsClicked(!isClicked)

                            }}>
                            <Text>Close</Text>
                        </Pressable>
                    </View>
                </Modal>) : null}


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
        borderColor: '#08acf7',
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
    subText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {
        width: '80%',
        height: 300,
        backgroundColor: 'white',
        elevation: 15,
        // borderWidth: 3,
        borderColor: '#b1d7e4',
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 320,
        zIndex: 999,
    },
    canbut: {
        // marginLeft: -3.5,
        height: 40,
        // width: '102.5%',
        width: '100%',
        marginTop: -5,
        // borderWidth: 3,
        borderColor: '#b1d7e4',
        alignItems: 'center',
        backgroundColor: 'white',
        // justifyContent: 'center',
    }
})