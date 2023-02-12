import { gql, useQuery } from "@apollo/client";

export const ADMIN_ORDERS_QUERY = gql`
  query adminOrders ($skip: Int, $take: Int, $sortBy: String, $order: String) {
    adminOrders (skip: $skip, take: $take, sortBy: $sortBy, order: $order) {
      items {
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
      count
    }
  }
`

type UseAdminOrdersVariables = {
  skip?: number
  take?: number
  sortBy?: string
  order?: string
}

export const useAdminOrders = (variables?: UseAdminOrdersVariables) => useQuery(ADMIN_ORDERS_QUERY, { variables })