import {NavigatorScreenParams} from '@react-navigation/native';

export type AppParams = {
  ListCountry: undefined;
  CountryDetail: {
    code: string;
  };
  ContinentDetail: {
    code: string;
  };
};

export type RootStackParamList = {
  AppStack: NavigatorScreenParams<AppParams>;
};
