export const prefixes = ['rnhw://'];
export const deepLinksConf = {
  screens: {
    initialRouteName: 'ListCountry',

    AppStack: {
      screens: {
        CountryDetail: {
          path: 'country/:code',
          exact: true,
        },
        ContinentDetail: {
          path: 'continent/:code',
          exact: true,
        },
      },
    },
  },
};
