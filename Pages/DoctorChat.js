import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import DoctorChatHeader from '../Components/DoctorChatHeader';
import DoctorChatList from '../Components/DoctorChatList';

const DoctorChat = () => {
    return (
        <View style={styles.container}>
            <Header pageName='Chat' />
            <DoctorChatHeader />
            <DoctorChatList />
            <Footer />
        </View>
    )
}

export default DoctorChat

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});