import {Center} from 'native-base';
import {ActivityIndicator} from 'react-native';
import React from 'react';
export const Loading: React.FC = () => {
  return (
    <Center bg="white" w="full" h="full">
      <Center bg="gray.200" w={40} h={40} rounded="8px">
        <ActivityIndicator size="large" />
      </Center>
    </Center>
  );
};
