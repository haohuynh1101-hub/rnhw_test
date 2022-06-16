import {useTheme} from '@react-navigation/native';
import {HStack, Pressable, Text} from 'native-base';
import React from 'react';
type Props = {
  title: string;
  value: string | undefined;
  //continent
  code?: string;
  isContinent?: boolean;
  onPressContinent?: (code: string | undefined) => void;
};
export const ItemInfo: React.FC<Props> = ({
  title,
  value,
  code,
  isContinent = false,
  onPressContinent,
}) => {
  const {colors} = useTheme();
  const handlePressContinent = () => {
    if (onPressContinent) {
      onPressContinent(code);
    }
  };
  return (
    <HStack alignItems="center">
      <Text flex={1} color={colors.text}>
        {title}
      </Text>
      {isContinent ? (
        <Pressable onPress={handlePressContinent}>
          <Text fontWeight="medium" fontSize="md" color="blue.400" underline>
            {value}
          </Text>
        </Pressable>
      ) : (
        <Text fontWeight="medium" fontSize="md" color={colors.text}>
          {value}
        </Text>
      )}
    </HStack>
  );
};
