import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import styles from './NavigationLink.module.scss'

export default function NavigationLink({ to, text }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.link, {
          [styles.activeLink]: isActive,
        })
      }
    >
      {text}
    </NavLink>
  )
}
