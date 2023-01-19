import { useCurrentUser } from "../hooks/useCurrentUser"
import { useAuth } from "../lib/auth/useAuth"


const TestPage = () => {

  const { data } = useCurrentUser()

  const { signIn, signOut } = useAuth()

  return (
    <div>
      {data ? (
        <>
          <div>{data.currentUser.email}</div>
          <button onClick={signOut}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn('ilyaonishchik@gmail.com', 'password')}>Sign in</button>
      )}
    </div>
  )
}

export default TestPage