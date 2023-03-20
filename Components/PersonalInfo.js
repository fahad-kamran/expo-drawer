import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colorDark, colorPrimary } from '../Config/MyConst'
import { TouchableOpacity } from 'react-native-gesture-handler'

const PersonalInfo = () => {
    const info = [
        { propertyName: 'Name', propertyValue: 'Fahad Kamran' },
        { propertyName: 'Email', propertyValue: 'fahadcs512@gmail.com' },
        { propertyName: 'Phone', propertyValue: '03462809691' },
    ]
    return (
        <View style={styles.container}>
            {info.map((v, i) => (
                <View style={styles.infoContainer} key={i}>
                    <Text style={styles.keyType}>{v.propertyName}</Text>
                    <Text style={styles.keyValue}>{v.propertyValue}</Text>
                </View>
            ))}
            <TouchableOpacity style={styles.updateBtn}>
                <Text style={styles.btnText}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PersonalInfo

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    infoContainer: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colorDark,
    },
    keyType: {
        color: colorPrimary,
        fontSize: 24,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    keyValue: {
        color: colorDark,
        fontSize: 22,
        fontWeight: 'bold'
    },
    updateBtn: {
        backgroundColor: colorPrimary,
        paddingVertical: 20,
        borderRadius: 25,
        marginTop: 10
    },
    btnText: {
        color: '#fff',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 20
    }
})