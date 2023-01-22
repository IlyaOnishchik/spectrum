import { gql, useQuery } from "@apollo/client";

export const CATEGORY_QUERY = gql`
  query category($id: String, $name: String) {
    category(id: $id, name: $name) {
      id
      name
    }
  }
`
type UseCategoryVariables = {
  id?: string
  name?: string
}

export const useCategory = (variables?: UseCategoryVariables) => useQuery(CATEGORY_QUERY, { variables })