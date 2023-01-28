import { gql, useMutation } from "@apollo/client"
import { CURRENT_USER_QUERY } from "./useCurrentUser"

export const TOGGLE_CART_PRODUCT_MUTATION = gql`
  mutation toggleCartProduct($productId: String!) {
    toggleCartProduct(productId: $productId)
  }
`

export const useToggleCartProduct = () => useMutation(TOGGLE_CART_PRODUCT_MUTATION, { refetchQueries: [{ query: CURRENT_USER_QUERY }] })