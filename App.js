import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Inventory from './Inventory'
import React from 'react'
import {Image, TouchableNativeFeedback} from 'react-native';

const AuthStack = createStackNavigator({
  Login: Login,
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
})

const AppStack = createStackNavigator({
    Inventory: Inventory
  },
  {
    initialRouteName: 'Inventory',
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

const AppContainer = createAppContainer(
  createSwitchNavigator(
  {
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
));

const App = props => (
  <AppContainer/>
);

export default App;