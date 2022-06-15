import {Box, HStack, Text} from 'native-base';
import React from 'react';

type Props = {
  name: string;
  emoji: string;
  native: string;
};
export const ItemCountry: React.FC<Props> = ({name, emoji, native}) => {
  return (
    <Box shadow="2" rounded="8px" mb={4} px={4}>
      <HStack alignItems="center">
        <Text fontSize={40}>{emoji}</Text>

        <Box flexDirection="column" ml={4}>
          <Text fontWeight="semibold">{name}</Text>
          <Text color="#9ca3af">{native}</Text>
        </Box>
      </HStack>
    </Box>
  );
};
