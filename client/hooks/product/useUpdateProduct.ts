import { gql, useMutation } from "@apollo/client";
import { PRODUCTS_QUERY } from "./useProducts";

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation updateProduct($id: String!, $price: Float) {
    updateProduct(updateProductInput: { id: $id, price: $price }) {
      id
    }
  }
`

export type UseUpdateProductVariables = {
  skip?: number
  take?: number
  sortBy?: string
  order?: string
}

export const useUpdateProduct = (variables: UseUpdateProductVariables) => useMutation(UPDATE_PRODUCT_MUTATION,
  {
    refetchQueries: [{ query: PRODUCTS_QUERY, variables }] 
  }
)