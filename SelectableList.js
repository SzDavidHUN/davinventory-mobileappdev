import React, {useState} from 'react'
import {AsyncStorage, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const SelectableList = props => {
  const [items, setItems] = useState([])

  AsyncStorage.getItem('ITEMS').then(data => setItems(JSON.parse(data)))

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/summer_leaf.jpeg')}>
      <View style={{flex: 1}}/>
      <View style={{flex: 4, backgroundColor: 'rgba(255, 255, 255, 0.75)', padding: 20}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>{props.title}</Text>
          <Text style={{textAlign: 'center'}}>{props.description}</Text>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={items}
            renderItem={({item}) => <SelectableListItem item={item} selectHandler={props.selectHandler} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
      <View style={{flex: 1}}/>
    </ImageBackground>
  )
};

const SelectableListItem = props => (
  <TouchableOpacity onPress={() => {props.selectHandler(props.item.id)}}>
    <View style={{marginVertical: 5}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'bold'}}>{props.item.itemName}</Text>
        <Text>{props.item.id}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{props.item.quantity} {props.item.unitName}</Text>
        <Text>{props.item.integer ? 'Integer' : 'Fractionable'}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginTop: 0,
    marginBottom: 15
  }
});

export default SelectableList