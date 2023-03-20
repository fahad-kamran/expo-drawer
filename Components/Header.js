import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// status bar height
import {
    colorPrimary,
    colorDanger,
    primaryHeading,
    containerPadding,
    notificationBar,
} from '../Config/MyConst';
import { AntDesign } from '@expo/vector-icons';
import { Fragment } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Header(props) {
    const navigation = useNavigation();
    return (
        <Fragment>
            <View style={styles.statusbar}></View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <AntDesign name="menu-fold" size={32} color="white" />
                </TouchableOpacity>
                <Text style={[primaryHeading, { color: '#fff' }]}>{props?.pageName}</Text>
                <View></View>
            </View>
        </Fragment>
    );
}

const styles = StyleSheet.create({
    statusbar: {
        height: notificationBar,
        backgroundColor: '#005ade',
    },
    container: {
        height: 60,
        backgroundColor: colorPrimary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: containerPadding,
        borderBottomWidth: 3,
        borderBottomColor: colorDanger,
    },
});
