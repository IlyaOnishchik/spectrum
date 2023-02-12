import { gql, useMutation } from "@apollo/client";
import { ADMIN_ORDERS_QUERY, UseAdminOrdersVariables } from "./useAdminOrders";

export const UPDATE_ORDER_MUTATION = gql`
  mutation updateOrder($id: String!, $status: String) {
    updateOrder(id: $id, status: $status)
  }
`

export const useUpdateOrder = (variables: UseAdminOrdersVariables) => useMutation(UPDATE_ORDER_MUTATION, { refetchQueries: [{ query: ADMIN_ORDERS_QUERY, variables }] })