import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  ContinentContainer,
  CountryDetailContainer,
  HomeContainer,
} from '~/containers';
import {AppParams} from './types';

const Stack = createNativeStackNavigator<AppParams>();

const AppStack = () => (
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

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const navigationRef = createNavigationContainerRef<{}>();
  return (
    <NavigationContainer ref={navigationRef} theme={DefaultTheme} {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
