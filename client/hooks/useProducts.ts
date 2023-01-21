import { gql, useQuery } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query products {
    products {
      id
      images { image { id name } order }
      price
      category { id name }
    }
  }
`

export const useProducts = () => useQuery(PRODUCTS_QUERY)