import { useState } from 'react'
import { Navigate } from 'react-router'
import { useUserContext } from '../../common/UserContext'
import Password from '../../components/Password/Password'

import styles from './LoginPage.module.scss'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const { setUserInfo } = useUserContext()
  async function login(e) {
    e.preventDefault()
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo)
        setRedirect(true)
      })
    } else {
      alert('Wrong credentionals')
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className={styles.wrapper}>
      <form onSubmit={login} className={styles.container}>
        <h1>Sign in</h1>
        <div className={styles.subtitle}>Sign in to become an author</div>
        <div className={styles.passwordWrapper}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
        </div>

        <Password
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.btn}>Login</button>
      </form>
    </div>
  )
}
