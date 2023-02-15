import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import styles from './RegisterPage.module.scss'
// import { ImEye } from 'react-icons/im'
// import { ImEyeBlocked } from 'react-icons/im'
import Password from '../../components/Password/Password'

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  async function register(e) {
    e.preventDefault()

    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    if (response.status !== 200) {
      alert('registration failed')
    } else {
      alert('registration successful!')
      setRedirect(true)
    }
  }
  if (redirect) {
    return <Navigate to={'/login'} />
  }
  return (
    <div className={styles.wrapper}>
      <form onSubmit={register} className={styles.container}>
        <h1>Create Account</h1>
        <div className={styles.subtitle}>
          <Link to={`/login`}> Already Registered? Log in here</Link>
        </div>
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

        <button className={styles.btn}>Sign up</button>
      </form>
    </div>
  )
}
