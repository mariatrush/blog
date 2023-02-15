import { useState } from 'react'

import styles from './Password.module.scss'
import { ImEye } from 'react-icons/im'
import { ImEyeBlocked } from 'react-icons/im'

export default function Password({ value, placeholder, onChange }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className={styles.passwordWrapper}>
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      {showPassword ? (
        <ImEyeBlocked
          className={styles.eyeIcon}
          onClick={() => setShowPassword((show) => !show)}
        />
      ) : (
        <ImEye
          className={styles.eyeIcon}
          onClick={() => setShowPassword((show) => !show)}
        />
      )}
    </div>
  )
}
