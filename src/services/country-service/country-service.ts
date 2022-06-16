import {gql} from '@apollo/client';

export const GET_COUNTRY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      emoji
      phone
      continent {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      emoji
    }
  }
`;

export const GET_CONTINENT = gql`
  query GetCountry($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
