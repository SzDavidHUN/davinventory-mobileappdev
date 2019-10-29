import React, {useState} from 'react'
import {AsyncStorage, Button, ImageBackground, StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import nanoid from 'nanoid/non-secure'

const NewItem = props => {
  const [itemName, setItemName] = useState('');
  const [unitName, setUnitName] = useState('');
  const [quantity, setQuantity] = useState(0)
  const [switchState, setSwitchState] = useState(false);

  const saveNewItem = async () => {
    if (itemName.length < 4) {
      alert('Item name too short')
      return
    }

    if (unitName.length < 1) {
      alert('Unit name too short')
      return
    }

    if (isNaN(quantity)) {
      alert('Quantity is not a number')
      return
    } else if (switchState) {
        if (Number.parseInt(quantity) != Number.parseFloat(quantity)){
            alert('Not an integer')
            return
        }
    }

    const item = {
      id: 'itm_' + nanoid(8),
      itemName: itemName,
      unitName: unitName,
      integer: switchState,
      quantity: switchState ? Number.parseInt(quantity) : Number.parseFloat(quantity)
    }

    if(!Array.isArray(JSON.parse(await AsyncStorage.getItem('ITEMS')))){
      AsyncStorage.setItem('ITEMS', '[]')
      console.warn('AsyncStorage ITEMS was reseted')
    }

    AsyncStorage.setItem('ITEMS', JSON.stringify([item, ...JSON.parse(await AsyncStorage.getItem('ITEMS'))]))

    props.navigation.navigate('Dashboard')
  };

  return (

    <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/summer_leaf.jpeg')}>
      <View style={{flex: 1}}/>
      <View style={{flex: 4, backgroundColor: 'rgba(255, 255, 255, 0.75)', padding: 20}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>New Item</Text>
          <Text style={{textAlign: 'center'}}>Add new item to track</Text>
        </View>
        <View>
          <Text>Item name:</Text>
          <TextInput style={styles.textInput} onChangeText={(inp) => setItemName(inp)}/>
          <Text>Unit:</Text>
          <TextInput style={styles.textInput} onChangeText={(inp) => setUnitName(inp)}/>
          <Text>Quantity:</Text>
          <TextInput style={styles.textInput} onChangeText={(inp) => setQuantity(inp)}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Integer only:</Text>
            <Switch onChange={(e) => {
              setSwitchState(e.nativeEvent.value)
            }} value={switchState}/>
          </View>
          <View style={{marginTop: 15}}>
            <Button title="Save" onPress={saveNewItem}/>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}/>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginTop: 0,
    marginBottom: 15
  }
});

NewItem.navigationOptions = {
  title: 'New Item'
};

export default NewItem