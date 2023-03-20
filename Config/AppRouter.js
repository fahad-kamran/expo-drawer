import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
import React, { useState } from 'react';
// icons
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

// import Pages
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import DoctorChat from '../Pages/DoctorChat';
import Login from '../Pages/Login';
import ForgotPassword from '../Pages/ForgotPassword';
import Register from '../Pages/Register';

const Drawer = createDrawerNavigator();
const AppRouter = () => {
    const [user, setUser] = useState('null');
    const logout = () => {
        console.log('logout')
    }
    return (
        <Provider>
            <NavigationContainer>
                <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName={user ? 'Home' : 'Login'} drawerContent={(props) => {
                    return (
                        <DrawerContentScrollView {...props}>
                            <DrawerItemList {...props} />
                            {user ? (
                                <DrawerItem
                                    icon={() => <SimpleLineIcons name="logout" size={27} color="black" />}
                                    label='Log Out'
                                    onPress={() => logout()}
                                />
                            ) : null}
                        </DrawerContentScrollView>
                    );
                }}>
                    <>
                        {user ? (
                            <>
                                <Drawer.Screen
                                    options={{
                                        drawerIcon: () => <Feather name='home' size={27} />,
                                    }}
                                    name='Home'
                                    component={Home}
                                />
                                <Drawer.Screen
                                    options={{
                                        drawerIcon: () => <Feather name='user' size={27} />,
                                    }}
                                    name='Profile'
                                    component={Profile}
                                />
                                <Drawer.Screen
                                    options={{
                                        drawerIcon: () => <Ionicons name="chatbox" size={27} color="black" />,
                                    }}
                                    name='DoctorChat'
                                    component={DoctorChat}
                                />
                                <Drawer.Screen
                                    options={{
                                        drawerIcon: () => <SimpleLineIcons name="login" size={27} color="black" />,
                                    }}
                                    name='Login'
                                    component={Login}
                                />
                                <Drawer.Screen
                                    options={{
                                        drawerIcon: () => <FontAwesome name="registered" size={27} color="black" />,
                                    }}
                                    name='Register'
                                    component={Register}
                                />
                                <Drawer.Screen
                                    options={{
                                        drawerIcon: () => <Feather name='lock' size={27} />,
                                    }}
                                    name='ForgotPassword'
                                    component={ForgotPassword}
                                />
                            </>
                        )
                            :
                            (
                                <>
                                    {/* yaha p woh screen aengi jo user k logout p show hongi */}
                                </>
                            )}
                    </>
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default AppRouter;