import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'



const AuthContext = createContext()


function AuthProvider ({ children }) {
  const [isAuth, setIsAuth] = useState(false)
  const [userPayload, setUserPayload] = useState(null) 

  const login = (token) => {
    localStorage.setItem('token', token) 
    const payload = jwtDecode(token)
    setIsAuth(true)
    setUserPayload(payload)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuth(false)
    setUserPayload(null)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) { 
      const payload = jwtDecode(token)
      setIsAuth(true)
      setUserPayload(payload)
    }
  }, [])

  return (

    <AuthContext.Provider value={{ login, logout, isAuth, userPayload }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }