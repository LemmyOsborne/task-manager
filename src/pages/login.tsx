import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export const Login = () => {
    const {data: session} = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) router.push("/dashboard")
    }, [session])
  return (
      <h1>Login</h1>
    <form>
        <button type='submit'>Log In</button>
        </form>
  )
}

export default Login
