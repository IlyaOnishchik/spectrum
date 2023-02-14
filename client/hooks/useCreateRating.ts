import { gql, useMutation } from "@apollo/client";
import { PRODUCT_QUERY } from "./product/useProduct";

export const CREATE_RATING_MUTATION = gql`
  mutation createRating($productId: String!, $value: Int!) {
    createRating(createRating: { productId: $productId, value: $value }) {
      id
    }
  }
`

export const useCreaterating = (productId: string) => useMutation(CREATE_RATING_MUTATION, { refetchQueries: [{ query: PRODUCT_QUERY, variables: { id: productId } }] })