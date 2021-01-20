import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {circle} from './components/circle';

const Circle = circle
export default function App() {
  return (
    <View style={styles.container}>
      <Circle />
      <Text>Open up App.js to start working on your</Text>
      <StatusBar style="auto" />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
