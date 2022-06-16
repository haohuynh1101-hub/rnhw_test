import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Pressable, Text} from 'native-base';
import React from 'react';

type Props = {
  title: string;
};
export const HeaderModal: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();
  return (
    <HStack
      bg="#fff"
      px="4"
      justifyContent="space-between"
      alignItems="center"
      h="56px"
      borderBottomWidth="1"
      borderBottomColor="gray.200">
      <Pressable
        w="48px"
        h="56px"
        justifyContent="center"
        onPress={navigation.goBack}>
        {/* <CloseIcon color="secondary.400" size="16px" /> */}
        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
      </Pressable>

      <Box flex={1}>
        <Text fontWeight="bold" fontSize="md" textAlign="center">
          {title || 'Title'}
        </Text>
      </Box>

      <Box w="48px" h="56px" />
    </HStack>
  );
};
