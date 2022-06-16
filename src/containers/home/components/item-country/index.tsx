import {Box, HStack, Pressable, Text} from 'native-base';
import React from 'react';

type Props = {
  code: string;
  name: string;
  emoji: string;
  native: string;
  onClickItem: (code: string) => void;
};
export const ItemCountry: React.FC<Props> = ({
  code,
  name,
  emoji,
  native,
  onClickItem,
}) => {
  const onPress = () => {
    if (onClickItem) {
      onClickItem(code);
    }
  };
  return (
    <Pressable
      onPress={onPress}
      shadow="1"
      borderWidth={1}
      borderColor="gray.200"
      rounded="8px"
      mb={4}
      px={4}>
      <HStack alignItems="center">
        <Text fontSize={40}>{emoji}</Text>

        <Box flexDirection="column" ml={4}>
          <Text fontWeight="semibold">{name}</Text>
          <Text color="#9ca3af">{native}</Text>
        </Box>
      </HStack>
    </Pressable>
  );
};
