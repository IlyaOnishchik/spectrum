import { gql, useMutation } from "@apollo/client";
import { PRODUCT_QUERY } from "./useProduct";

export const CREATE_REVIEW_MUTATION = gql`
  mutation createreview($productId: String!, $text: String!) {
    createReview(createReview: { productId: $productId, text: $text }) {
      id
    }
  }
`

export const useCreateReview = (productId: string) => useMutation(CREATE_REVIEW_MUTATION, { refetchQueries: [{ query: PRODUCT_QUERY, variables: { id: productId } }] })