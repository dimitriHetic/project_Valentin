import React from 'react';
import {View} from 'react-native';

class circle extends React.Component{

render(){
    return( 
        
        <View style={{height: 150, width:150, borderRadius:100, backgroundColor: this.props.color, position: 'absolute', bottom: this.props.bot,left: this.props.left,zIndex: 1000}}></View>
        )
    }
}

export {circle};