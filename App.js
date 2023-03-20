import { StyleSheet, View } from 'react-native';
import React from 'react';
import { colorLight } from './Config/MyConst';
import { StatusBar } from 'expo-status-bar';
import AppRouter from './Config/AppRouter';

const App = () => {
  return (
    <View style={styles.container}>
      <AppRouter />
      <StatusBar style='inverted' />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLight,
  }
});