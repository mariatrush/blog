import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom'
import styles from './Post.module.scss'

export default function Post({
  _id,
  title,
  summary,
  cover,
  content,
  createdAt,
  author,
}) {
  return (
    <Link to={`/post/${_id}`} className={styles.container}>
      <div className={styles.imgWrapper}>
        <img
          src={'http://localhost:4000/' + cover}
          alt=""
          className={styles.imgage}
        />
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.title}>{title}</div>
        <div>{summary}</div>
        <time className={styles.time}>
          {formatISO9075(new Date(createdAt))}
        </time>
      </div>

      {/* <a href="">{author.username}</a> */}
    </Link>
  )
}
