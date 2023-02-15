import { createContext, useContext, useState } from 'react'

export const UserContext = createContext({})

export const useUserContext = function () {
  return useContext(UserContext)
}

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({})
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}
