import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client"
import { useEffect, useState } from "react"

export const SIGN_UP_MUTATION = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(credentials: { email: $email, password: $password })
  }
`

const SIGN_IN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(credentials: { email: $email, password: $password })
  }
`

export const useProvideAuth = () => {

  const [token, setToken] = useState<string | null>(null)

  let tokenLS: string | null = null
  if (typeof window !== "undefined") tokenLS = localStorage.getItem('access-token')
  useEffect(() => {
    setToken(tokenLS)
  }, [tokenLS])

  const createApolloClient = () => {
    return new ApolloClient({
      link: new HttpLink({ 
        uri: 'http://localhost:3001/graphql',
        headers: {
          authorization: `Bearer ${token}`,
        }
      }),
      cache: new InMemoryCache()
    })
  }

  const signIn = async (email: string, password: string) => {
    const result = await createApolloClient().mutate({ mutation: SIGN_IN_MUTATION, variables: { email, password } })
    if (result?.data?.signIn) {
      localStorage.setItem('access-token', result.data.signIn)
      setToken(result.data.signIn)
    }
  }
  
  const signUp = async (email: string, password: string) => {
    const result = await createApolloClient().mutate({ mutation: SIGN_UP_MUTATION, variables: { email, password } })
    if (result?.data?.signUp) {
      localStorage.setItem('access-token', result.data.signUp)
      setToken(result.data.signIn)
    }
  }

  const signOut = () => {
    localStorage.removeItem('access-token')
    setToken(null)
  }

  return { token, createApolloClient, signUp, signIn, signOut }
}