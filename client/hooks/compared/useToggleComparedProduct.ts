import { gql, useMutation } from "@apollo/client";
import { COMPARED_QUERY } from "./useCompared";

export const TOGGLE_COMPARED_PRODUCT = gql`
  mutation toggleComparedProduct($productId: String!) {
    toggleComparedProduct(productId: $productId) {
      id
    }
  }
`

export const useToggleComparedProduct = () => useMutation(TOGGLE_COMPARED_PRODUCT, { refetchQueries: [{ query: COMPARED_QUERY }] })