import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ShowcaseScreen from '../screens/ShowcaseScreen';
import SplashScreen from '../screens/SplashScreen';
import TransactionDay from '../screens/TransactionDay/HomeScreen';
import TripDetailScreen from '../screens/TravelApp/TripDetailScreen';
import TripsScreen from '../screens/TravelApp/TripsScreen';
import DevelopScreen from '../screens/DevelopScreen'

export type RootStackParamList = {
  splash: undefined;
  showcase: undefined;
  develop: undefined
  transactionDay: undefined;
  travelApp_trips: undefined;
  travelApp_tripDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
export default function() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="showcase" headerMode="none">
        <Stack.Screen name="splash" component={SplashScreen}></Stack.Screen>
        <Stack.Screen name="develop" component={DevelopScreen}></Stack.Screen>
        <Stack.Screen name="showcase" component={ShowcaseScreen}></Stack.Screen>
        <Stack.Screen
          name="transactionDay"
          component={TransactionDay}></Stack.Screen>
        <Stack.Screen
          name="travelApp_trips"
          component={TripsScreen}></Stack.Screen>
        <Stack.Screen
          name="travelApp_tripDetail"
          component={TripDetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
