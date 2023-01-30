import { gql, useMutation } from "@apollo/client"
import { FAVORITES_QUERY } from "./useFavorites"

export const TOGGLE_FAVORITES_PRODUCT_MUTATION = gql`
  mutation toggleFavoritesProduct($productId: String!) {
    toggleFavoritesProduct(productId: $productId) {
      id
      products { id }
    }
  }
`

export const useToggleFavoritesProduct = () => useMutation(TOGGLE_FAVORITES_PRODUCT_MUTATION, { refetchQueries: [{ query: FAVORITES_QUERY }] })