import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/Ionicons";

import { HomeScreen } from "../screens/HomeScreen";
import { CalculatorScreen } from "../screens/CalculatorScreen";
import { QRCodeScannerScreen } from "../screens/QRCodeScannerScreen";

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#C2F970",
        tabBarInactiveTintColor: "#ffffff",
        tabBarStyle: {
          backgroundColor: "#191D88",
          height: 65,
          paddingBottom: 5,
          paddingTop: 10,
          paddingHorizontal: 4,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: "Início",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home-outline"
              size={26}
              color={focused ? "#C2F970" : "#ffffff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Calc"
        component={CalculatorScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: "Calculadora",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="calculator-outline"
              size={26}
              color={focused ? "#C2F970" : "#ffffff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="QRcode"
        component={QRCodeScannerScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: "QRCode",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="qr-code-outline"
              size={26}
              color={focused ? "#C2F970" : "#ffffff"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Relatórios"
        component={HomeScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarLabel: "Relatórios",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="bar-chart-outline"
              size={26}
              color={focused ? "#C2F970" : "#ffffff"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
