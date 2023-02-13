import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Entypo';

export default function HomeScreen({navigation}) {
  function handleNavigation(screenName)
  {
    navigation.navigate(screenName); 
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <TouchableOpacity
        onPress={() => handleNavigation('Scan and Open')}
        style={{backgroundColor: '#024199',padding :17, width:80}}
        >
          <Text>Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}