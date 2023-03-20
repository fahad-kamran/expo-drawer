import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
    containerPadding,
    colorPrimary,
    colorLight,
    UID,
} from '../Config/MyConst';
import { Entypo } from '@expo/vector-icons';

const DoctorChatList = () => {
    const chatList = [
        {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard duorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            uid: 3560,
            time: '5:05 P.M',
        },
        {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard duorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            uid: 3567,
            time: '5:05 P.M',
        },
        {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard duorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            uid: 3560,
            time: '5:05 P.M',
        },
        {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard duorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            uid: 3567,
            time: '5:05 P.M',
        },
        {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard duorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            uid: 3560,
            time: '5:05 P.M',
        },
        {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard duorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            uid: 3567,
            time: '5:05 P.M',
        },
        {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard duorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            uid: 3560,
            time: '5:05 P.M',
        },
        {
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard duorem Ipsum has been the industry standard dummy text ever since the 1500s,',
            uid: 3567,
            time: '5:05 P.M',
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView scrollToEnd="true">
                {chatList.map((v, i) => (
                    <View
                        key={i}
                        style={[
                            styles.flex,
                            UID == v.uid ? { justifyContent: 'flex-end' } : null,
                        ]}>
                        <View
                            style={[
                                styles.msgBox,
                                UID == v.uid
                                    ? { backgroundColor: colorPrimary }
                                    : { backgroundColor: colorLight },
                            ]}>
                            <Text
                                style={UID == v.uid ? { color: '#fff' } : { color: '#000' }}>
                                {i}{v?.text}
                            </Text>
                            <Text
                                style={[
                                    { textAlign: 'right' },
                                    UID == v.uid ? { color: '#fff' } : { color: '#000' },
                                ]}>
                                {v?.time}
                            </Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder="Message..." />
                <TouchableOpacity style={styles.sendbtn}>
                    <Entypo name="arrow-long-right" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DoctorChatList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: containerPadding,
        paddingVertical: 8,
    },
    inputBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        padding: 8,
        borderColor: '#dee2e6',
        borderWidth: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    sendbtn: {
        backgroundColor: colorPrimary,
        display: 'flex',
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    msgBox: {
        width: '80%',
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
    },
});
