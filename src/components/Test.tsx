import { Pressable, StyleSheet, Text, View, TextInput, FlatList } from 'react-native'
import { useRef, useState } from 'react'
import { AntDesign, EvilIcons } from '@expo/vector-icons';

type propType = {
    name: string,
    dataList: any,
    icon: any
}

export default function Test(prop: propType) {

    const [selectedData, setSelectedData] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState(prop.dataList);
    const onSearch = (txt: string) => {
        if (txt != '') {
            let tempData = data.filter((item: { value: string; }) => {
                return item.value.toLowerCase().indexOf(txt.toLowerCase()) > -1;
            });
            setData(tempData);
        }
        else {
            setData(prop.dataList);
        }
    }
    // const searchRef = useRef();

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

                    {/* {isClicked ? (
                        <>
                            <Text style={{}}>Speciality</Text>
                            <Text style={styles.subText}>{selectedData}</Text>
                        </>
                    ) : (<Text style={styles.headText}>Speciality</Text>)
                    } */}

                </View>
            </Pressable>

            {isClicked ? (
                <View style={styles.dropdown}>
                    <TextInput
                        // ref={searchRef}
                        placeholder='Search'
                        style={styles.searchBar}
                        onChangeText={(txt) => {
                            onSearch(txt);
                        }}
                    />
                    <FlatList data={data} renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                style={styles.dataItem}
                                onPress={() => {
                                    setSelectedData(item.value);
                                    onSearch('');
                                    setIsClicked(false);
                                    // searchRef.current.clear();
                                }}>
                                <Text>{item.value}</Text>
                            </Pressable>
                        )
                    }}
                    />
                </View>
            ) : null}

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
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#b1d7e4',
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
    headText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdown: {
        width: '90%',
        height: 300,
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#b1d7e4',
        alignSelf: 'center',
        // position: 'absolute',
        // marginTop: 70,
    },
    searchBar: {
        width: '90%',
        height: 50,
        paddingLeft: 15,
        marginTop: 20,
        borderRadius: 20,
        borderWidth: .5,
        borderColor: '#b1d7e4',
        alignSelf: 'center',
    },
    dataItem: {
        width: '80%',
        height: 50,
        borderBottomWidth: .2,
        borderBottomColor: '#b1d7e4',
        alignSelf: 'center',
        justifyContent: 'center',
    }
})