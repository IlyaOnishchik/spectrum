import { gql, useMutation } from "@apollo/client"
import { CART_QUERY } from "./useCart"

export const TOGGLE_CART_PRODUCT_MUTATION = gql`
  mutation toggleCartProduct($productId: String!) {
    toggleCartProduct(productId: $productId)
  }
`

export const useToggleCartProduct = () => useMutation(TOGGLE_CART_PRODUCT_MUTATION, { refetchQueries: [{ query: CART_QUERY }] })