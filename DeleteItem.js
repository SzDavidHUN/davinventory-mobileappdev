import React, {useState} from 'react'
import {AsyncStorage, FlatList, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import SelectableList from "./SelectableList";

const DeleteItem = props => {
  const [items, setItems] = useState([])

  AsyncStorage.getItem('ITEMS').then(data => setItems(JSON.parse(data)))

  const doDeletion = (id) => {
    const filtered = items.filter(item => item.id !== id)
    AsyncStorage.setItem('ITEMS', JSON.stringify(filtered))
  }

  return (
    <SelectableList
      title="Delete Item"
      description="Select what kind of item you want to delete"
      selectHandler={doDeletion}
    />
  )
};

DeleteItem.navigationOptions = {
  title: 'Delete Item'
};

export default DeleteItem