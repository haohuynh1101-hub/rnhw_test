import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ContinentContainer,
  CountryDetailContainer,
  HomeContainer,
} from '~/containers';
import {AppParams} from './types';

const Stack = createNativeStackNavigator<AppParams>();

export const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="ListCountry">
    <Stack.Screen
      options={{presentation: 'card'}}
      name="ListCountry"
      component={HomeContainer}
    />
    <Stack.Screen
      options={{presentation: 'modal'}}
      name="CountryDetail"
      component={CountryDetailContainer}
    />
    <Stack.Screen
      options={{presentation: 'modal'}}
      name="ContinentDetail"
      component={ContinentContainer}
    />
  </Stack.Navigator>
);
