import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { containerPadding } from '../Config/MyConst';
import DrImg from '../assets/images/fahadkamran.gif';

const DoctorChatHeader = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.avatar}>
                <Image source={DrImg} style={{ flex: 1, width: null, height: null }} />
            </TouchableOpacity>
            <Text style={styles.drName}>Dr. Fahad Kamran</Text>
        </View>
    );
};

export default DoctorChatHeader;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: containerPadding,
        paddingVertical: 8,
        marginVertical: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#dee2e6',
    },
    avatar: {
        width: 50,
        height: 50,
        marginStart: 'auto',
        marginEnd: 'auto',
        borderRadius: 25,
        overflow: 'hidden',
        marginBottom: 8,
    },
    drName: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
