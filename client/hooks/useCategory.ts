import { gql, useQuery } from "@apollo/client";

export const CATEGORY_QUERY = gql`
  query category($id: String, $name: String) {
    category(id: $id, name: $name) {
      id
      name
      products {
        id
        price
        parameters {
          id
          value
          unit
          parameter {
            id
            name
            order
            type { id name }
            category { id name order }
          }
        }
      }
      filters {
        checkFilters {
          id
          name
          order
          values {
            value
            unit
          }
        }
        rangeFilters {
          id
          name
          order
          min
          max
          unit
        }
      }
    }
  }
`
type UseCategoryVariables = {
  id?: string
  name?: string
}

export const useCategory = (variables?: UseCategoryVariables) => useQuery(CATEGORY_QUERY, { variables })