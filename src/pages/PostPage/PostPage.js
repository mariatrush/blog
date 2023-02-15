import { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatISO9075 } from 'date-fns'
import { UserContext } from '../../common/UserContext'
import styles from './PostPage.module.scss'

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null)
  const { userInfo } = useContext(UserContext)
  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo)
      })
    })
  }, [])
  if (!postInfo) return ''
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{postInfo.title}</h1>
        <div className={styles.imgWrapper}>
          <img
            src={`http://localhost:4000/${postInfo.cover}`}
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.date}>
          {formatISO9075(new Date(postInfo.createdAt))}
        </div>
        <div className={styles.author}> by @{postInfo.author.username} </div>
        {userInfo?.id === postInfo.author._id && (
          <div className={styles.editContainer}>
            <Link to={`/edit/${postInfo._id}`}> Edit this post</Link>
          </div>
        )}
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postInfo.content }}
      ></div>
    </div>
  )
}
