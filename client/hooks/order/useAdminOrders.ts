import { gql, useQuery } from "@apollo/client";

export const ADMIN_ORDERS_QUERY = gql`
  query adminOrders {
    adminOrders {
      id
      status
      amount
      createdAt
      orderProducts {
        id
        product { id }
        quantity
      }
    }
  }
`

export const useAdminOrders = () => useQuery(ADMIN_ORDERS_QUERY)