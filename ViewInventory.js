import React, {useState} from 'react'
import {AsyncStorage, FlatList, ImageBackground, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import SelectableList from "./SelectableList";

const ViewInventory = props => {
    const [items, setItems] = useState([])

    AsyncStorage.getItem('ITEMS').then(data => setItems(JSON.parse(data)))

    const selectHandler = (id) => {
        const selected = items.find(item => item.id === id)
        let text = ''
        text += 'ID: ' + selected.id + '\n'
        text += 'Name: ' + selected.itemName + '\n'
        text += 'Quantity: ' + selected.quantity + ' ' + selected.unitName + '\n'
        text += selected.integer ? 'Integers only' : 'Floats accepted'
        alert(text)
    }

    return (
        <SelectableList
            title="View inventory"
            description="You can see all the items here"
            selectHandler={selectHandler}
        />
    )
};

ViewInventory.navigationOptions = {
    title: 'View Inventory'
};

export default ViewInventory