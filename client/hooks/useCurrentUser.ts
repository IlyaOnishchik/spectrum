import { gql, useQuery } from "@apollo/client";

const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser { id email }
  }
`

export const useCurrentUser = () => useQuery(CURRENT_USER_QUERY)