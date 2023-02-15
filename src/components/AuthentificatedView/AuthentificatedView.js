import { useUserContext } from '../../common/UserContext'
import { Navigate } from 'react-router-dom'

export default function AuthentificatedView({ children }) {
  const { userInfo } = useUserContext()

  return userInfo ? children : <Navigate to="/login" />
}
