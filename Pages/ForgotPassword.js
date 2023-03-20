import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import coverBg from '../assets/images/authBg.jpg'
import { ScrollView } from 'react-native-gesture-handler';
import { colorPrimary, containerPadding, screenHeight } from '../Config/MyConst';
import Logo from '../assets/images/authLogo.png';
import { FontAwesome } from '@expo/vector-icons';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
        console.log(email)
    }
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={coverBg} style={styles.mainContainer}>
                <View style={styles.opacityLayer}></View>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={{ resizeMode: 'cover' }} />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name="envelope" size={24} color="#000" />
                    <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Enter Email.." />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
                    <Text style={styles.btnText}>Send Email</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    )
}

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    opacityLayer: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.6)',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    mainContainer: {
        paddingHorizontal: containerPadding,
        paddingVertical: 100,
        height: screenHeight,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    logoContainer: {
        width: 140,
        height: 183,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
    },
    inputContainer: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        paddingStart: 10,
        marginBottom: 20
    },
    input: {
        flex: 1,
        padding: 10,
        fontSize: 18
    },
    submitBtn: {
        backgroundColor: colorPrimary,
        padding: 20,
        borderRadius: 30,
        marginBottom: 20,
        width: '100%'
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
});