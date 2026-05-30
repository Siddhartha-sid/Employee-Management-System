import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../util/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userdata, setuserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    setuserData({ employees, admin })
  }, [])

  return (
    <AuthContext.Provider value={{ userdata, setuserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider