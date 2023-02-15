import styles from './Loading.module.scss'
import RiseLoader from 'react-spinners/RiseLoader'

export default function Loading() {
  return (
    <div className={styles.container}>
      <RiseLoader
        color="tomato"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
