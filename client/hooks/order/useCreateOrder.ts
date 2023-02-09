import { gql, useMutation } from "@apollo/client";
import { CART_QUERY } from "../cart/useCart";

export const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($name: String!, $phone: String!, $country: String!, $city: String!, $address: String!, $zipCode: Int!) {
    createOrder(createOrder: { name: $name, phone: $phone, country: $country, city: $city, address: $address, zipCode: $zipCode }) {
      id
    }
  }
`

export const useCreateOrder = () => useMutation(CREATE_ORDER_MUTATION, { refetchQueries: [{ query: CART_QUERY }] })