import { gql, useQuery } from "@apollo/client";

export const COMPARED_QUERY = gql`
  query compared {
    compared {
      products {
        id
        price
        quantity
        category { name }
        images {
          image {
            name
          }
          order
        }
        parameters {
          parameter {
            id
            name
            order
            category {
              id
              name
              order 
            }
          }
          value
          unit
        }
      }
    }
  }
`

export const useCompared = () => useQuery(COMPARED_QUERY)