import React from 'react'
import {Button, ImageBackground, Text, View} from 'react-native';

const Inventory = props => (
  <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/summer_leaf.jpeg')}>
    <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.75)'}}>
      <Text style={{textAlign: 'center', fontSize: 24}}>Inventory</Text>
      <Button title="Logout" onPress={() => props.navigation.navigate('Login')}/>
    </View>
  </ImageBackground>
);

export default Inventory