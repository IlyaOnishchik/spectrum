import { gql, useQuery } from "@apollo/client";

export const USERS_QUERY = gql`
  query users($skip: Int, $take: Int, $sortBy: String, $order: String) {
    users(skip: $skip, take: $take, sortBy: $sortBy, order: $order) {
      items { 
        id
        email
        isActivated
        isBanned
        roles { name }
        ordersAmount
        redemptionAmount
        redemptionPercent
      }
      count
    }
  }
`

export type UseUsersVariables = {
  skip?: number
  take?: number
  sortBy?: string
  order?: string
}

export const useUsers = (variables?: UseUsersVariables) => useQuery(USERS_QUERY, { variables })