import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colorPrimary, containerPadding } from '../Config/MyConst';
import Avatar from '../assets/images/fahadkamran.gif'

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image source={Avatar} style={styles.avatar} />
            </View>
            <Text style={styles.userName}>Fahad Kamran</Text>
            <Text style={styles.mobileNumber}>0346-2809691</Text>
        </View>
    )
}

export default ProfileHeader;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: containerPadding,
        paddingVertical: 20,
        backgroundColor: '#dce8f5'
    },
    avatarContainer: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 8
    },
    avatar: {
        flex: 1,
        width: null,
        height: null,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colorPrimary
    },
    mobileNumber: {
        fontSize: 18,
        color: '#000',
        textAlign: 'center',
    }
})