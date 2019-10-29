import React, {useState} from 'react'
import {AsyncStorage, View, Text, ImageBackground, Picker} from "react-native";

const AddItem = props => {
    const [selectedItem, setSelectedItem] = useState({})
    const [title, setTitle] = useState('Loading..')

    AsyncStorage.getItem('ITEMS').then(data => {
        setSelectedItem(JSON.parse(data).find(item => item.id === props.navigation.state.params.id))
        setTitle(selectedItem.itemName)
    })

    return (

    <ImageBackground style={{width: '100%', height: '100%'}} source={require('./assets/summer_leaf.jpeg')}>
        <View style={{flex: 1, backgroundColor: 'rgba(255, 255, 255, 0)'}}>
            <View style={{flex: 1}} />
            <View style={{flex: 4, backgroundColor: 'rgba(255, 255, 255, 0.75)', padding: 20}}>
                <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>{title}</Text>
                <Text>{props.navigation.state.params.id}</Text>
                <Text>Name: {selectedItem.itemName}</Text>
            </View>
            <View style={{flex: 1}} />
        </View>
    </ImageBackground>
)}

AddItem.navigationOptions = {
    title: 'Insert item'
}

export default AddItem