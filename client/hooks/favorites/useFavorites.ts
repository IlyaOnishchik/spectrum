import { gql, useQuery } from "@apollo/client";

export const FAVORITES_QUERY = gql`
  query favorites {
    favorites {
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

export const useFavorites = () => useQuery(FAVORITES_QUERY)