/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView, Text, TouchableOpacity, useColorScheme, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home1a from './Home1a';
import { enableScreens } from 'react-native-screens';
import Home1b from './Home1b';
enableScreens(true);
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();


  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="1_a"
          component={Home1a}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="1_asdasd"
          component={Home1b}
          options={{ title: 'Welcome' }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;
