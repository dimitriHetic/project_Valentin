import React from 'react';
import {View} from 'react-native';

const circle = () => {
    return( 
    <View style={{height: 150, width:150, borderRadius:100, backgroundColor: 'red', position: 'absolute',zIndex: 100}}></View>
    )
}

export {circle};