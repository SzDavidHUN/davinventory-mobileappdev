import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Inventory from './Inventory'
import React from 'react'

const MainNavigator = createStackNavigator({
    Login: Login,
    Inventory: Inventory
},
    {
        initialRouteName: 'Login'
    });

const AppContainer = createAppContainer(MainNavigator);

const App = props => (
        <AppContainer />
    )

export default App;