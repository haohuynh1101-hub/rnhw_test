import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {EventRegister} from 'react-native-event-listeners';
import {deepLinksConf, prefixes} from '~/constant/deeplink';

import {AppStack} from './stack-navigator';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      options={{presentation: 'card'}}
      name="AppStack"
      component={AppStack}
    />
  </Stack.Navigator>
);

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const navigationRef = useNavigationContainerRef();
  const linking = {
    prefixes: prefixes,
    config: deepLinksConf,
  };

  const [mode, setMode] = useState(false);

  useEffect(() => {
    let eventListener = EventRegister.addEventListener('changeTheme', data => {
      setMode(data);
    });
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
      theme={mode ? DarkTheme : DefaultTheme}
      {...props}>
      <RootStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
