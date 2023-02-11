import { gql, useQuery } from "@apollo/client";

export const ORDERS_QUERY = gql`
  query orders {
    orders {
      id
      status
      amount
      createdAt
      orderProducts {
        id
        product { id }
        quantity
        paid
      }
    }
  }
`

export const useOrders = () => useQuery(ORDERS_QUERY)