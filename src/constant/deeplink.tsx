export const prefixes = ['rnhw://'];
export const deepLinksConf = {
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
};
