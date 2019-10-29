import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Dashboard from './Dashboard'
import Inventory from './Inventory'
import Login from './Login';
import React from 'react'
import {hamburgetMenu} from './IconStore'
import {Image, TouchableNativeFeedback} from 'react-native';
import NewItem from "./NewItem";
import InsertItem from "./InsertItem";
import RetrieveItem from "./RetrieveItem";
import DeleteItem from "./DeleteItem";
import AddItem from "./AddItem";
import IconStore from './IconStore'
import ViewInventory from "./ViewInventory";

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
                    <Image source={hamburgetMenu} style={{width: 36, height: 36, margin: 6}}/>
                </TouchableNativeFeedback>
            )
        }
    });

const AppStack = createStackNavigator({
        Dashboard: Dashboard,
        Inventory: Inventory,
        NewItem: NewItem,
        InsertItem: InsertItem,
        RetrieveItem: RetrieveItem,
        DeleteItem: DeleteItem,
        AddItem: AddItem,
        ViewInventory: ViewInventory
    },
    {
        initialRouteName: 'Dashboard',
        defaultNavigationOptions: ({navigation}) => {
            return {
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
                    <TouchableNativeFeedback onPress={(e) => navigation.navigate('Dashboard')}>
                        <Image source={IconStore.home} style={{width: 36, height: 36, margin: 6}}/>
                    </TouchableNativeFeedback>
                )
            }
        }
    });

const AppContainer = createAppContainer(
    createSwitchNavigator(
        {
            App: AppStack,
            Auth: AuthStack
        },
        {
            initialRouteName: 'App'
        }
    ));

const App = props => (
    <AppContainer/>
);

export default App;