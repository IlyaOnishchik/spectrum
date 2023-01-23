import { gql, useQuery } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query products($categoryId: String, $take: Int, $skip: Int, $sortBy: String, $order: String) {
    products(categoryId: $categoryId, take: $take, skip: $skip, sortBy: $sortBy, order: $order) {
      items {
        id
        price
        category { id name }
        images { image { id name } order }
        parameters { parameter { name } value }
      }
      count
    }
  }
`

type UseProductsVariables = {
  categoryId?: string
  take?: number
  skip?: number
  sortBy?: string
  order?: string
}

export const useProducts = (variables?: UseProductsVariables) => useQuery(PRODUCTS_QUERY, { variables })