import { gql, useQuery } from "@apollo/client";

export const CART_QUERY = gql`
  query cart {
    cart {
      products {
        id
        quantity
        product {
          id
          price
          quantity
          images { image { name } order }
          parameters {
            parameter { name }
            value
            unit
          }
        }
      }
    }
  }
`

export const useCart = () => useQuery(CART_QUERY)