import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Screen1 from './src/screens/Screen1';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={ {
         headerStyle: { 
          backgroundColor: '#024199' 
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#FFF",
      },
        headerTintColor: "#FFF"
      }}>
        
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ headerRight: () => <Icon/> }}
        /> */}

        <Stack.Screen
          name="Scan and Open"
          component={Screen1}
          // options={{ headerRight: () => <Icon/> }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
