import { gql, useQuery } from "@apollo/client"

export const PRODUCT_QUERY = gql`
  query product($id: String) {
    product(id: $id) {
      id
      price
      quantity
      images { image { id name } order }
      parameters {
        id
        parameter {
          id
          name
          category { id name order }
        }
        value
        unit
      }
    }
  }
`

type UseProductVariables = {
  id?: string
}

export const useProduct = (variables?: UseProductVariables) => useQuery(PRODUCT_QUERY, { variables })