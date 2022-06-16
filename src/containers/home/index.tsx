import React, {useState} from 'react';
import {Box, HStack, Switch, Text} from 'native-base';
import {useQuery} from '@apollo/client';
import {FlatList} from 'react-native';
import {ItemCountry} from './components';
import {useNavigation, useTheme} from '@react-navigation/native';
import {GET_COUNTRIES} from '~/services';
import {Loading} from '~/components';
import {ICountry} from '~/services';
import {EventRegister} from 'react-native-event-listeners';

type ICountries = {
  countries: ICountry[];
};

export const HomeContainer: React.FC = () => {
  const navigation = useNavigation();
  const {loading, data} = useQuery<ICountries>(GET_COUNTRIES);
  const {colors} = useTheme();

  const [mode, setMode] = useState(false);

  const handleClickItem = (code: string) => {
    navigation.navigate('AppStack', {
      screen: 'CountryDetail',
      params: {code},
    });
  };

  const handleChangeMode = () => {
    setMode(v => !v);
    EventRegister.emit('changeTheme', !mode);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box safeAreaTop flex={1} bgColor={colors.background}>
      <Box w="full" height={80} bgColor="blue.400" roundedBottomLeft="100px" />
      <Box p={4}>
        <HStack alignItems="center">
          <Text
            flex={1}
            fontWeight="medium"
            fontSize={20}
            mb={4}
            color={colors.text}>
            List of countries
          </Text>

          <HStack alignItems="center">
            <Text color={colors.text} fontWeight="medium" fontSize={16} mr={4}>
              Change mode
            </Text>
            <Switch onValueChange={handleChangeMode} value={mode} />
          </HStack>
        </HStack>

        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.code}
          data={data?.countries}
          renderItem={({item}) => (
            <ItemCountry
              key={item.code}
              code={item.code}
              name={item.name}
              emoji={item.emoji}
              native={item.native}
              onClickItem={handleClickItem}
            />
          )}
        />
      </Box>
    </Box>
  );
};
