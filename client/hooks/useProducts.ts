import { gql, useQuery } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query products {
    products {
      id
      price
      category { id name }
      images { image { id name } order }
      parameters { parameter { name } value }
    }
  }
`

export const useProducts = () => useQuery(PRODUCTS_QUERY)