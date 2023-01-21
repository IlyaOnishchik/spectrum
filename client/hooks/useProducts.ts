import { gql, useQuery } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query products($categoryId: String) {
    products(categoryId: $categoryId) {
      id
      price
      category { id name }
      images { image { id name } order }
      parameters { parameter { name } value }
    }
  }
`

type UseProductsVariables = {
  categoryId?: string
}

export const useProducts = (variables: UseProductsVariables) => useQuery(PRODUCTS_QUERY, { variables })