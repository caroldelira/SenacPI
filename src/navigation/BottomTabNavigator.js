import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons'

import { HomeScreen } from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#C2F970',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#191D88',
          height: 65,
          paddingBottom: 5,
          paddingTop: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Início',
          tabBarIcon: ({ focused }) => (
            <Icon name="home-outline" size={26} color={focused ? "#C2F970" : "#ffffff"} />
          )
        }}
      />
      <Tab.Screen
        name="Calc"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Calculadora',
          tabBarIcon: ({ focused }) => (
            <Icon name="calculator-outline" size={26} color={focused ? "#C2F970" : "#ffffff"} />
          )
        }}
      />
      <Tab.Screen
        name="QRcode"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'QRCode',
          tabBarIcon: ({ focused }) => (
            <Icon name="qr-code-outline" size={26} color={focused ? "#C2F970" : "#ffffff"} />
          )
        }}
      />
      <Tab.Screen
        name="Relatórios"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Relatórios',
          tabBarIcon: ({ focused }) => (
            <Icon name="bar-chart-outline" size={26} color={focused ? "#C2F970" : "#ffffff"} />
          )
        }}
      />

    </Tab.Navigator>
  )
}

