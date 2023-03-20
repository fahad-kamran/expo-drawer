import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colorPrimary, containerPadding, colorDanger } from '../Config/MyConst';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="home" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('DoctorChat')}>
                <Ionicons name="chatbox" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Fontisto name="heartbeat-alt" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name="add-box" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name="delete" size={30} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        height: 60,
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colorPrimary,
        paddingHorizontal: containerPadding,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: 3,
        borderTopColor: colorDanger,
    },
});
