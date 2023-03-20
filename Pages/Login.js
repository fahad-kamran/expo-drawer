import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import coverBg from '../assets/images/authBg.jpg'
import { ScrollView } from 'react-native-gesture-handler';
import { colorPrimary, containerPadding, screenHeight } from '../Config/MyConst';
import Logo from '../assets/images/authLogo.png';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ navigation }) => {
    const [visibility, setVisibility] = useState(false);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = () => {
        console.log(email, pass)
    }
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={coverBg} style={styles.mainContainer}>
                <View style={styles.opacityLayer}></View>
                <View style={styles.row}>
                    <Text style={{ color: '#fff', fontSize: 20, borderBottomColor: '#fff', borderBottomWidth: 1, paddingBottom: 5 }}>LOG IN</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={{ resizeMode: 'cover' }} />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name="envelope" size={24} color="#000" />
                    <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Enter Email.." />
                </View>
                <View style={styles.inputContainer}>
                    <FontAwesome name="lock" size={24} color="#000" />
                    <TextInput value={pass} onChangeText={(text) => setPass(text)} style={styles.input} placeholder="Enter Password.." secureTextEntry={!visibility} />
                    <TouchableOpacity onPress={() => setVisibility(!visibility)} style={{ marginEnd: 10 }}>
                        <Ionicons name={visibility ? 'eye-off' : 'eye'} size={24} color="#000" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
                    <Text style={styles.btnText}>LOG IN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontStyle: 'italic', fontSize: 20 }}>Forgot Password ?</Text>
                </TouchableOpacity>
            </ImageBackground>
        </ScrollView>
    )
}

export default Login;

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
        height: screenHeight
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
        marginBottom: 20
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20
    }
});