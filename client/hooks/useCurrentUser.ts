import { gql, useQuery } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser { 
      id 
      email 
      isActivated 
      isBanned 
      roles {
        id 
        name 
      }
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
      favorites {
        products {
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

export const useCurrentUser = () => useQuery(CURRENT_USER_QUERY)