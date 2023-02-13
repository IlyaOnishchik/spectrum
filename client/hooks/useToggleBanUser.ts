import { gql, useMutation } from "@apollo/client";
import { USERS_QUERY } from "./useUsers";

export const TOGGLE_BAN_USER_MUTATION = gql`
  mutation toggleBanUser($id: String!) {
    toggleBanUser(id: $id)
  }
`

export type UseToggleBanUserVariables = {
  skip?: number
  take?: number
  sortBy?: string
  order?: string
}

export const useToggleBanUser = (variables: UseToggleBanUserVariables) => useMutation(TOGGLE_BAN_USER_MUTATION, { refetchQueries: [{ query: USERS_QUERY, variables }] })