import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useUserContext } from '../../common/UserContext'
import { WiMoonAltWaxingCrescent3 } from 'react-icons/wi'
import { WiDaySunny } from 'react-icons/wi'
import { IoIosLogOut } from 'react-icons/io'
import NavigationLink from '../NavigationLink/NavigationLink'

import styles from './Header.module.scss'

export default function Header({ setTheme, theme }) {
  const { setUserInfo, userInfo } = useUserContext()

  const cgangeTheme = () => {
    setTheme((theme) => {
      if (theme === 'light') {
        return 'dark'
      } else {
        return 'light'
      }
    })
  }

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
      .then((response) => {
        response.json().then((userInfo) => {
          setUserInfo(userInfo)
        })
      })
      .catch(() => {
        setUserInfo(null)
      })
  }, [])

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    }).then(() => {
      setUserInfo(null)
    })
  }

  const username = userInfo?.username
  return (
    <div className={styles.headerContainer}>
      <nav className={styles.leftSide}>
        <NavigationLink to="/" text="My blog" />
        {username && <NavigationLink to="/create" text="Create new post" />}
      </nav>
      <nav className={styles.nagivation}>
        {username && <div>Hello, {username}</div>}
        {!username && (
          <>
            <div className={styles.signUpWrapper}>
              <NavigationLink to="/login" text="Login" />

              <NavigationLink to="/register" text="Register" />
            </div>
          </>
        )}
        <div className={styles.themeContainer} onClick={cgangeTheme}>
          {username && (
            <div>
              <IoIosLogOut onClick={logout} />
            </div>
          )}
          {theme === 'light' ? <WiMoonAltWaxingCrescent3 /> : <WiDaySunny />}
        </div>
      </nav>
    </div>
  )
}
