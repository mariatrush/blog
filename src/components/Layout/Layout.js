import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout() {
  const [theme, setTheme] = useState('light')
  return (
    <div className={theme}>
      <Header setTheme={setTheme} theme={theme} />
      <Outlet />
      <Footer />
    </div>
  )
}
