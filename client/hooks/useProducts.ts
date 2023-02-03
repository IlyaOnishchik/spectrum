import { gql, useQuery } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query products(
    $categoryId: String, 
    $take: Int, $skip: Int, 
    $sortBy: String, $order: String, 
    $minPrice: Int, $maxPrice: Int,
    $filters: FiltersInput,
    $query: String
  ) {
    products(
      categoryId: $categoryId, 
      take: $take, skip: $skip, 
      sortBy: $sortBy, order: $order, 
      minPrice: $minPrice, maxPrice: $maxPrice,
      filters: $filters,
      query: $query
    ) {
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
  minPrice?: number
  maxPrice?: number
  filters?: unknown
  query?: string
}

export const useProducts = (variables?: UseProductsVariables) => useQuery(PRODUCTS_QUERY, { variables })