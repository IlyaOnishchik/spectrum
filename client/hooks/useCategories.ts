import { useQuery, gql } from "@apollo/client";

export const CATEGORIES_QUERY = gql`
  query categories {
    categories {
      id
      name
      image {
        name
      }
      parentCategoryId
      order
    }
  }
`

export const useCategories = () => useQuery(CATEGORIES_QUERY)