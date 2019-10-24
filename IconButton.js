import React from 'react'
import {Image, Text, TouchableNativeFeedback, View} from "react-native";

const IconButton = props => {
  return (
    <TouchableNativeFeedback style={props.styles.buttonTouchable} onPress={props.onPress}>
      <View style={props.styles.buttonView}>
        <Image source={props.icon} />
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  )
}

export default IconButton