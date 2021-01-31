import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {circle} from './components/circle';
import {cross} from './components/cross';
import {grid} from './components/grid';
import {morpion} from './components/morpion';

let Circle = circle
const Cross = cross
const Grid = grid



export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {left: 0}
      }
  
  
  _truc(i){
    console.log("appuyer"+i)
    this.setState({left: i*100})
  }
render(){
  return (
    <View style={styles.container}>
      <Circle left = {this.state.left} />
      <Cross />
      <Grid/>
      <StatusBar style="auto" />

      <TouchableOpacity style = {styles.bouton1} onPress = {()=>this._truc(1)}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton2} onPress = {()=>this._truc(2)}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton3} onPress = {()=>this._truc(3)}>
        
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton4} onPress = {()=>this._truc(4)}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton5} onPress = {()=>this._truc(5)}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton6} onPress = {()=>this._truc(6)}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton7} onPress = {()=>this._truc(7)}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton8} onPress = {()=>this._truc(8)}>
      <Text >
         Butto
      </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.bouton9} onPress = {()=>this._truc(9)}>
      <Text >
         Button
      </Text>
      </TouchableOpacity>
      
    </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bouton1:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 535,
    left: 290,
    backgroundColor: 'green',
  },
  bouton2:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 535,
    left: 550,
    backgroundColor: 'green',
  },
  bouton3:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 535,
    left: 810,
    backgroundColor: 'green',
  },
  bouton4:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 275,
    left: 290,
    backgroundColor: 'green',
  },
  bouton5:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 275,
    left: 550,
    backgroundColor: 'green',
  },
  bouton6:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 275,
    left: 810,
    backgroundColor: 'green',
  },
  bouton7:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 15,
    left: 290,
    backgroundColor: 'green',
  },
  bouton8:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 15,
    left: 550,
    backgroundColor: 'green',
  },
  bouton9:{
    height: 250,
    width: 250,
    position: 'absolute',
    bottom: 15,
    left: 810,
    backgroundColor: 'green',
  },
});
