import { gql, useMutation } from "@apollo/client";
import { CART_QUERY } from "./useCart";

export const CHANGE_CART_PRODUCT_QUANTITY = gql`
  mutation changeCartProductQuantity($id: String!, $quantity: Int!) {
    changeCartProductQuantity(id: $id, quantity: $quantity)
  }
`

export const useChangeCartProductQuantity = () => useMutation(CHANGE_CART_PRODUCT_QUANTITY, { refetchQueries: [{ query: CART_QUERY }] })