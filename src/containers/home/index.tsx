import React from 'react';
import {Box, Text} from 'native-base';
import {useQuery} from '@apollo/client';
import {FlatList} from 'react-native';
import {ItemCountry} from './components';
import {useNavigation} from '@react-navigation/native';
import {GET_COUNTRIES} from '~/services';
import {Loading} from '~/components';
import {ICountry} from '~/services';

type ICountries = {
  countries: ICountry[];
};

export const HomeContainer: React.FC = () => {
  const navigation = useNavigation();
  const {loading, data} = useQuery<ICountries>(GET_COUNTRIES);

  const handleClickItem = (code: string) => {
    navigation.navigate('CountryDetail', {
      code: code,
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box safeAreaTop flex={1} bgColor="white">
      <Box p={4}>
        <Text fontWeight="medium" fontSize={20} mb={4}>
          List of countries
        </Text>

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
          maxToRenderPerBatch={10}
          initialNumToRender={5}
        />
      </Box>
    </Box>
  );
};
