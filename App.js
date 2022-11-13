import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import { FaHome } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <FaHome color={color} size={size} />
          ),}}/>
        <Tab.Screen name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <IoMdSettings color={color} size={size} />
            ),}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}