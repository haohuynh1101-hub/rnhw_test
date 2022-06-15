import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {AppNavigator} from './navigators';
import {StatusBar} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {NativeBaseProvider} from 'native-base';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

enableScreens();

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com/',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <AppNavigator />
        </SafeAreaProvider>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}

export default App;
