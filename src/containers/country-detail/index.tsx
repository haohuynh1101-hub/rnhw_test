import React from 'react';
import {Box, Text, VStack} from 'native-base';
import {HeaderModal, Loading} from '~/components';
import {
  RouteProp,
  useNavigation,
  useRoute,
  useTheme,
} from '@react-navigation/native';
import {AppParams} from '~/navigators';
import {useQuery} from '@apollo/client';
import {ItemInfo} from './components';
import {GET_COUNTRY, ICountry} from '~/services';

type RouteParams = RouteProp<AppParams, 'CountryDetail'>;

type IData = {
  country: ICountry;
};

export const CountryDetailContainer: React.FC = () => {
  const {params} = useRoute<RouteParams>();
  const navigation = useNavigation();
  const {colors} = useTheme();

  const {loading, data} = useQuery<IData>(GET_COUNTRY, {
    variables: {code: params.code},
  });

  const handlePressContinent = (code: string | undefined) => {
    if (code) {
      navigation.navigate('AppStack', {
        screen: 'ContinentDetail',
        params: {
          code,
        },
      });
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Box flex={1}>
      <HeaderModal title="Country Detail" />

      <Box p={4}>
        <VStack>
          <Text textAlign="center" fontSize={56} color={colors.text}>
            {data?.country.emoji}
          </Text>
          <Text
            fontWeight="semibold"
            fontSize={20}
            textAlign="center"
            mb={4}
            color={colors.text}>
            {data?.country.name}
          </Text>

          <VStack space={4}>
            <ItemInfo title="alpha2code" value={data?.country.code} />
            <ItemInfo title="callingCodes" value={`+${data?.country.phone}`} />
            <ItemInfo
              title="continent"
              code={data?.country.continent.code}
              value={data?.country.continent.name}
              isContinent
              onPressContinent={handlePressContinent}
            />
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};
