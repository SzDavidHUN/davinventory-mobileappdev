import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';

const Navbar = props => {
  return (
    <View>
      <View style={{height: 22, backgroundColor: '#00c'}}/>
      <View
        style={{
          height: 70,
          backgroundColor: '#00f',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignContent: 'stretch'
        }}
      >
        <View style={{justifyContent: 'center', marginLeft: 10}}>
          <TouchableHighlight onPress={(e) => alert('Hamburger menu not implemented yet')}>
            <Image source={require('./assets/menu.png')}/>
          </TouchableHighlight>
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <Text style={{fontSize: 32, paddingHorizontal: 10, color: 'white'}}>DavInventory</Text>
          <Text style={{fontSize: 8, paddingHorizontal: 10, color: 'white'}}>TrackEverything™</Text>
        </View>
      </View>
    </View>
  )
};

export default Navbar;