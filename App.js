import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {circle} from './components/circle';
import {cross} from './components/cross';
import {grid} from './components/grid';
import {morpion} from './components/morpion';

let Circle = circle
const Cross = cross
const Grid = grid

function verifWin(playArray)
{
  if(playArray[0] == playArray[1] && playArray[0]  == playArray[2] && playArray[0]!= null){
    return playArray[0]
  }
  
  if(playArray[3] == playArray[4] && playArray[3] == playArray[5] && playArray[3]!= null){
    return playArray[3]
  }

  if(playArray[6] == playArray[7] && playArray[6] == playArray[8] && playArray[6]!= null){
    return playArray[6]
  }

  if(playArray[0] == playArray[3] && playArray[0] == playArray[6] && playArray[0]!= null){
    return playArray[0]
  }

  if(playArray[1] == playArray[4] && playArray[1] == playArray[7] && playArray[1]!= null){
    return playArray[1]
  }

  if(playArray[2] == playArray[5] && playArray[2] == playArray[8] && playArray[2]!= null){
    return playArray[2]
  }

  if(playArray[0] == playArray[4] && playArray[0] == playArray[8] && playArray[0]!= null){
    return playArray[0]
  }

  if(playArray[2] == playArray[4] && playArray[2] == playArray[6] && playArray[2]!= null){
    return playArray[2]
  }
}


export default class App extends React.Component {

  

  constructor(props)
  {
    super(props)
    this.state = { GridArray: []}
    this.index = 0;
    this.color = 'red'
    this.playArray = new Array(9)
    this.winner = 0
  }

  
  
  
  _truc(i){


    if(i == 1 && this.playArray[0] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Cross left = {300} bot = {550} color = {this.color}/>})});
    }
    if(i == 2 && this.playArray[1] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Circle left = {560} bot = {550} color = {this.color}/>})});
    }
    if(i == 3 && this.playArray[2] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Circle left = {820} bot = {550} color = {this.color}/>})});
    }
    if(i == 4 && this.playArray[3] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Circle left = {300} bot = {300} color = {this.color}/>})});
    }
    if(i == 5 && this.playArray[4] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Circle left = {560} bot = {300} color = {this.color}/>})});
    }
    if(i == 6 && this.playArray[5] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Circle left = {820} bot = {300} color = {this.color}/>})});
    }
    if(i == 7 && this.playArray[6] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Circle left = {300} bot = {50} color = {this.color}/>})});
    }
    if(i == 8 && this.playArray[7] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Circle left = {560} bot = {50} color = {this.color}/>})});
    }
    if(i == 9 && this.playArray[8] == null)
    {
      this.setState({GridArray: this.state.GridArray.concat({form: <Circle left = {820} bot = {50} color = {this.color}/>})});
    }

    if(this.color == 'red')
    {
      this.playArray[i-1] = 1 
    }
    else
    {
      this.playArray[i-1] = 2
    }

    this.index += 1

    if(this.color == 'red')
    {
      this.color = 'blue'
    }
    else
    {
      this.color = 'red'
    }

    //console.log(this.playArray[0],this.playArray[1],this.playArray[2],'\n',this.playArray[3],this.playArray[4],this.playArray[5],'\n',this.playArray[6],this.playArray[7],this.playArray[8])

    this.winner = verifWin(this.playArray)

    if(this.winner != null)
    {
      console.log(this.winner)
    }
  }
render(){

  const renderList = this.state.GridArray.map((data) => {

      return(
        data.form
      )

  })

  return (
    <View style={{flex: 1}}>
      <View style={{
        flex:1,
        backgroundColor: 'skyblue'
      }}>
        
        <StatusBar style="auto" />

      </View>
      <View style={{flex: 8, alignItems: 'center',justifyContent: 'center'}}>
        
        <View style={{width: 800, height: 800}}>
          
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style = {styles.bouton1} onPress = {()=>this._truc(1)}/>

            <TouchableOpacity style = {styles.bouton2} onPress = {()=>this._truc(2)}/>

            <TouchableOpacity style = {styles.bouton3} onPress = {()=>this._truc(3)}/>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style = {styles.bouton4} onPress = {()=>this._truc(4)}/>

            <TouchableOpacity style = {styles.bouton5} onPress = {()=>this._truc(5)}/>

            <TouchableOpacity style = {styles.bouton6} onPress = {()=>this._truc(6)}/>

          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style = {styles.bouton7} onPress = {()=>this._truc(7)}/>

            <TouchableOpacity style = {styles.bouton8} onPress = {()=>this._truc(8)}/>

            <TouchableOpacity style = {styles.bouton9} onPress = {()=>this._truc(9)}/>
          </View>
          
        </View>

      {renderList}

      </View>
      

      
      

    </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    height: '50',
    backgroundColor: 'skyblue'
    
  },

  bouton1:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
  bouton2:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
  bouton3:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
  bouton4:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
  bouton5:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
  bouton6:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
  bouton7:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
  bouton8:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
  bouton9:{
    height: 200,
    width: 200,
    backgroundColor: 'lightcoral',
  },
});
