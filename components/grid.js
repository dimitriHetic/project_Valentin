import React from 'react';
import {View, Image } from 'react-native';

const grid = () => {

    return( 
        <View>
            <Image
          style={{width: 800, height: 800, opacity: '100%'}}
          resizeMode="contain"
           source={require('./morpion-png-7.png')}
        //   source={{ uri: 'https://images.unsplash.com/photo-1611072746344-9da6e3a16ebe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}
        />
        </View>
        );
    }
    
    export {grid};
