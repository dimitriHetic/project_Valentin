import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {circle} from './components/circle';
import {cross} from './components/cross';
import {grid} from './components/grid';

const Circle = circle
const Cross = cross
const Grid = grid

function truc(lautre){
  lautre.backgroundColor = 'red';
  console.log("truc");
}

export default function App() {
  return (
    <View style={styles.container}>
      <Circle />
      <Cross />
      <Grid/>
      <StatusBar style="auto" />

      <TouchableOpacity style = {styles.bouton1}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton2}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton3}>
        
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton4}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton5}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton6}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton7}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton8}>
      <Text >
         Butto
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton9}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bouton1:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 500,
    left: 50,
    backgroundColor: 'green',
  },
  bouton2:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 500,
    left: 110,
    backgroundColor: 'green',
  },
  bouton3:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 500,
    left: 170,
    backgroundColor: 'green',
  },
  bouton4:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 440,
    left: 50,
    backgroundColor: 'green',
  },
  bouton5:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 440,
    left: 110,
    backgroundColor: 'green',
  },
  bouton6:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 440,
    left: 170,
    backgroundColor: 'green',
  },
  bouton7:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 380,
    left: 50,
    backgroundColor: 'green',
  },
  bouton8:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 380,
    left: 110,
    backgroundColor: 'green',
  },
  bouton9:{
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 380,
    left: 170,
    backgroundColor: 'green',
  },
});
