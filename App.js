import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import { FaBloggerB, FaHome, FaUniregistry } from 'react-icons/fa';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import styled from 'styled-components';

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
            ),
          }} />
        <Tab.Screen name="SignUp"
          component={SignUp}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FaUniregistry color={color} size={size} />
            ),
          }} />
        <Tab.Screen name="SignIn"
          component={SignIn}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FaBloggerB color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

