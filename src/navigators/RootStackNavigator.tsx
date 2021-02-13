import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShowcaseScreen from '../screens/ShowcaseScreen';
import SplashScreen from '../screens/SplashScreen';
import TransactionDay from '../screens/TransactionDay';

export type RootStackParamList = {
  splash: undefined;
  showcase: undefined;
  transactionDay: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="showcase" headerMode="none">
        <Stack.Screen name="splash" component={SplashScreen}></Stack.Screen>
        <Stack.Screen name="showcase" component={ShowcaseScreen}></Stack.Screen>
        <Stack.Screen
          name="transactionDay"
          component={TransactionDay}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
