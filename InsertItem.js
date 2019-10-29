import React, {useState} from 'react'
import {AsyncStorage, Button, Modal, Text, TextInput, TouchableHighlight, View} from "react-native";
import SelectableList from "./SelectableList";

const InsertItem = props => {
  const [items, setItems] = useState([]);

  const selectItem = (id) => {
    alert(id)
  }

  AsyncStorage.getItem('ITEMS').then(data => setItems(JSON.parse(data)));

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [textInput, setTextInput] = useState('');

  return (
      <SelectableList
          title="Insert Item"
          description="Select what kind of item you want to insert"
          selectHandler={(id) => {props.navigation.push('AddItem', {id: id})}}
      />
  )
};

InsertItem.navigationOptions = {
  title: 'Insert Item'
};

export default InsertItem