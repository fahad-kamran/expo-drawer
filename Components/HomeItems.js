import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {
    colorPrimary,
    colorDanger,
    colorInfo,
    colorSuccess,
    colorWarning,
    containerPadding,
} from '../Config/MyConst';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

const HomeItems = () => {
    const dataItem = [
        {
            name: 'Find A Location',
            icon: <Ionicons name="ios-location" size={30} color="white" />,
            url: '/',
            bg: colorWarning,
        },
        {
            name: 'Choose A Doctor',
            icon: <Fontisto name="doctor" size={30} color="white" />,
            url: '/',
            bg: colorSuccess,
        },
        {
            name: 'Make An Appointment',
            icon: <MaterialIcons name="library-add" size={30} color="white" />,
            url: '/',
            bg: colorPrimary,
        },
        {
            name: 'ER Wainting Period',
            icon: <Ionicons name="ios-calendar" size={30} color="white" />,
            url: '/',
            bg: colorInfo,
        },
        {
            name: 'Find An Urgent Care Location',
            icon: <FontAwesome5 name="hospital-alt" size={30} color="white" />,
            url: '/',
            bg: colorDanger,
        },
    ];
    return (
        <ScrollView>
            <View style={styles.container}>
                {dataItem.map((item, index) => (
                    <TouchableOpacity
                        style={[styles.cardContainer, { backgroundColor: item.bg }]}
                        key={index}>
                        {item?.icon}
                        <Text style={styles.heading}>{item?.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default HomeItems;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: containerPadding,
        paddingVertical: 25,
    },
    cardContainer: {
        paddingHorizontal: containerPadding,
        paddingVertical: 30,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
    },
    heading: {
        color: '#fff',
        marginStart: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});
