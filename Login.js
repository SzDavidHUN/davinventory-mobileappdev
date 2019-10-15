import React, {useState} from 'react';
import {Text, View, Button, TextInput, ImageBackground} from 'react-native';
import Navbar from './Navbar';

const Login = props => {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const doLogin = () => {
    console.log('Username: ', usernameInput, ' Password: ', passwordInput)
    if (usernameInput === 'Asd' && passwordInput === 'asd') {
        props.navigation.push('Inventory')
        return true
    } else {
        alert('Incorrect password/username')
        return false
    }
  }

  return (
      <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/library_walk.jpeg')}>
        <View style={{flex: 1}}>
          <View style={{flex: 2, justifyContent: 'flex-start', alignItems: 'stretch'}}>
            {/*<Navbar />*/}
          </View>
          <View style={{
            flex: 3,
            backgroundColor: 'white',
            opacity: 0.8,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{fontSize: 32, paddingHorizontal: 10, color: 'black'}}>DavID</Text>
            <Text style={{fontSize: 8, paddingHorizontal: 10, color: 'black'}}>LoginEverywhere™</Text>
            <TextInput
                placeholder="Username"
                placeholderTextColor="black"
                onChangeText={(inp) => setUsernameInput(inp)}
                style={{
                  width: '80%',
                  margin: 10,
                  borderColor: 'black',
                  borderBottomWidth: 1,
                  textAlign: 'center'
                }}
            />
            <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry={true}
                onChangeText={(inp) => setPasswordInput(inp)}
                onSubmitEditing={doLogin}
                style={{
                  width: '80%',
                  margin: 10,
                  borderColor: 'black',
                  borderBottomWidth: 1,
                  textAlign: 'center'
                }}
            />
            <Button
                title="Login"
                color="blue"
                onPress={doLogin}
            />
          </View>
          <View style={{flex: 3}} />
        </View>
      </ImageBackground>
  );
}

Login.navigationOptions = () => {
    title: 'Home'
}

export default Login