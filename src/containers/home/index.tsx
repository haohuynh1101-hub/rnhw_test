import React from 'react';
import {Box, Text} from 'native-base';
import {gql, useQuery} from '@apollo/client';
import {FlatList} from 'react-native';
import {ItemCountry} from './components';

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      native
      emoji
    }
  }
`;

type ICountry = {
  code: string;
  name: string;
  native: string;
  emoji: string;
};

type ICountries = {
  countries: ICountry[];
};

export const HomeContainer: React.FC = () => {
  const {loading, data} = useQuery<ICountries>(GET_COUNTRIES);
  if (loading) {
    return <Text>Loading</Text>;
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
              name={item.name}
              emoji={item.emoji}
              native={item.native}
            />
          )}
          maxToRenderPerBatch={10}
          initialNumToRender={5}
        />
      </Box>
    </Box>
  );
};
