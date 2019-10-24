import React from 'react'
import IconButton from './IconButton'
import IconStore from './IconStore'
import {Text, View, Button, TextInput, ImageBackground, StyleSheet, TouchableNativeFeedback} from 'react-native';

const Dashboard = props => {
  const doLogout = () => {
    props.navigation.navigate('Login');
  }

  return (
  <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/summer_leaf.jpeg')}>
    <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0)'}}>
      <View style={{
        flex: 1,
        margin: 20,
        padding: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
      }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >Statistics</Text>
        <Text>Type count: 250</Text>
        <Text>Item count: 23124</Text>
      </View>
      <View style={{
        flex: 5,
        margin: 0,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
      }}>
        <View style={{flex: 1}}>
          <IconButton title="Insert item" icon={IconStore.insertItem} styles={styles} />
          <IconButton title="New item" icon={IconStore.plusThick} styles={styles} />
          <IconButton title="View inventory" icon={IconStore.warehouse} styles={styles} />
        </View>
        <View style={{flex: 1}}>
          <IconButton title="Retrieve item" icon={IconStore.retrieveItem} styles={styles} />
          <IconButton title="Remove item" icon={IconStore.trashCan} styles={styles} />
          <IconButton title="Logout" icon={IconStore.logout} styles={styles} onPress={doLogout} />
        </View>
      </View>
    </View>
  </ImageBackground>
)}

Dashboard.navigationOptions = {
  title: 'Dashboard'
}

const styles = StyleSheet.create({
  buttonTouchable: {
    flex: 1,
    margin: 10
  },
  buttonView: {
    margin: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
})

export default Dashboard