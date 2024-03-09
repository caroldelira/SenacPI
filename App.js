import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { SignUpScreen } from './src/screens/SignUpScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { SuccessScreen } from './src/screens/SuccessScreen';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigator';
import { RecoverPassword } from './src/screens/RecoverPassword';
import { CreateListScreen } from './src/screens/CreateListScreen';
import { ProductsList } from './src/screens/ProductsList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Success"
          component={SuccessScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Recover"
          component={RecoverPassword}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Navigation"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ListScreen"
          component={CreateListScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ProductsListScreen"
          component={ProductsList}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


