import { View, Text } from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Entypo';

export default function Icon() {
  return (
    <View>
      <Text><Icons name="flash" size={30}></Icons></Text>
    </View>
  )
}