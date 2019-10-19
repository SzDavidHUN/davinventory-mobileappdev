import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Inventory from './Inventory'
import React from 'react'
import {Image, TouchableNativeFeedback} from 'react-native';

const MainNavigator = createStackNavigator({
    Login: Login,
    Inventory: Inventory
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'DavInventory',
      headerStyle: {
        backgroundColor: '#00f'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
      },
      headerLeft: (
        <TouchableNativeFeedback onPress={(e) => alert('Hamburger menu not implemented yet')}>
          <Image source={require('./assets/menu.png')} style={{width: 36, height: 36, margin: 6}} />
        </TouchableNativeFeedback>
      )
    }
  });

const AppContainer = createAppContainer(MainNavigator);

const App = props => (
  <AppContainer/>
);

export default App;