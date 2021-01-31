import React from 'react';
import {View} from 'react-native';

class circle extends React.Component{

render(){
    return( 
        
        <View style={{height: 150, width:150, borderRadius:100, backgroundColor: 'red', position: 'absolute', bottom: 500,left: this.props.left,zIndex: 1000}}></View>
        )
    }
}

export {circle};