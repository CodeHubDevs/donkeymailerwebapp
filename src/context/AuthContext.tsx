import React, { useCallback, createContext, useState, useContext } from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthContext = createContext({} as any)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>('')

  const signIn = useCallback(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const signOut = useCallback(() => {
    localStorage.clear()
    setToken(null)
    window.location.reload()
  }, [])

  const value = { token, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
