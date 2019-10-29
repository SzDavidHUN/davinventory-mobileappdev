import React, {useState} from 'react'
import {AsyncStorage, FlatList, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import SelectableList from "./SelectableList";

const RetrieveItem = props => {
  const [items, setItems] = useState([])

  AsyncStorage.getItem('ITEMS').then(data => setItems(JSON.parse(data)))

  return (
    <SelectableList
      title="Retrieve Item"
      description="Select what kind of item you want to retrieve"
      selectHandler={alert}
    />
  )
};

RetrieveItem.navigationOptions = {
  title: 'Retrieve Item'
};

export default RetrieveItem