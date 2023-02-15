import Post from '../../components/Post/Post'
import { useEffect, useState } from 'react'
import styles from './IndexPage.module.scss'
import Loading from '../../components/Loading/Loading'

export default function IndexPage() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('http://localhost:4000/post').then((response) => {
      response.json().then((posts) => {
        setPosts(posts)
        setIsLoading(false)
      })
    })
  }, [])
  return (
    <>
      <div className={styles.container}>
        {isLoading && <Loading />}
        {posts.length > 0 && posts.map((post) => <Post {...post} />)}
      </div>
    </>
  )
}
