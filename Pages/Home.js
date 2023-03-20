import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HomeItems from '../Components/HomeItems';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header pageName='Home' />
            <HomeItems />
            <Footer />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});