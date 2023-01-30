import { gql, useQuery } from "@apollo/client";

export const COMPARED_QUERY = gql`
  query compared {
    compared {
      products {
        id
        price
        quantity
        images {
          image {
            name
          }
          order
        }
        parameters {
          parameter {
            name
          }
          value
          unit
        }
      }
    }
  }
`

export const useCompared = () => useQuery(COMPARED_QUERY)