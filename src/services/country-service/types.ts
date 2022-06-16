export type ICountry = {
  code: string;
  name: string;
  native: string;
  emoji: string;
  phone: string;
  continent: {
    code: string;
    name: string;
  };
};

export type IContinent = {
  code: string;
  name: string;
  countries: {
    code: string;
    name: string;
  }[];
};
