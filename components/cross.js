import React from 'react';
import {View, Image } from 'react-native';

const cross = () => {

    return( 
        <View>
            <Image
          style={{ width: 250, height: 250, position: 'absolute', zIndex:100}}
          resizeMode="contain"
           source={require('./U39woXvV-croix.png')}
        //   source={{ uri: 'https://images.unsplash.com/photo-1611072746344-9da6e3a16ebe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}
        />
        </View>
        );
    }
    
    export {cross};
