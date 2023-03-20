import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProfileHeader from '../Components/ProfileHeader';
import PersonalInfo from '../Components/PersonalInfo';

const Profile = () => {
    return (
        <View style={styles.container}>
            <Header pageName='Profile' />
            <ScrollView>
                <ProfileHeader />
                <PersonalInfo />
            </ScrollView>
            <Footer />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});