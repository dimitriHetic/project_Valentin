import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {circle} from './components/circle';
import {cross} from './components/cross';
import {grid} from './components/grid';

const Circle = circle
const Cross = cross
const Grid = grid
export default function App() {
  return (
    <View style={styles.container}>
      <Circle />
      <Cross />
      <Grid/>
      <StatusBar style="auto" />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
