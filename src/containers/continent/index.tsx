import {Box, HStack, Pressable, Text, VStack} from 'native-base';
import {HeaderModal, Loading} from '~/components';
import React from 'react';
import {AppParams} from '~/navigators';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {GET_CONTINENT, IContinent} from '~/services';
import {ItemInfo} from '../country-detail/components';
import {FlatList} from 'react-native';

type RouteParams = RouteProp<AppParams, 'ContinentDetail'>;

type IData = {
  continent: IContinent;
};

export const ContinentContainer: React.FC = () => {
  const {params} = useRoute<RouteParams>();
  const navigation = useNavigation();

  const {loading, data} = useQuery<IData>(GET_CONTINENT, {
    variables: {code: params.code},
  });

  const handlePressCountry = (code: string) => () => {
    if (code) {
      navigation.navigate('CountryDetail', {
        code,
      });
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <Box flex={1}>
      <HeaderModal title="Continent" />

      <Box p={4} flex={1}>
        <Text fontWeight="semibold" fontSize={20} textAlign="center">
          {data?.continent.name}
        </Text>

        <VStack space={2}>
          <ItemInfo title="code" value={data?.continent.code} />

          <HStack alignItems="flex-start">
            <Text flex={1}>countries</Text>

            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.code}
              data={data?.continent.countries}
              renderItem={({item}) => (
                <Pressable mb={2} onPress={handlePressCountry(item.code)}>
                  <Text underline color="blue.400" textAlign="right">
                    {item.name}
                  </Text>
                </Pressable>
              )}
            />
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
