import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import styles from './CreatePost.module.scss'
import Editor from '../../components/Editor/Editor'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState('')
  const [redirect, setRedirect] = useState(false)

  async function createNewPost(e) {
    const data = new FormData()
    data.set('title', title)
    data.set('summary', summary)
    data.set('content', content)
    data.set('file', files[0])
    e.preventDefault()

    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    })
    if (response.ok) {
      setRedirect(true)
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div className={styles.container}>
      <form onSubmit={createNewPost} className={styles.form}>
        <input
          type="title"
          placeholder={'Title'}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.title}
        />
        <input
          type="summary"
          placeholder={'About'}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className={styles.about}
        />
        <input
          type="file"
          onChange={(e) => setFiles(e.target.files)}
          className={styles.addFile}
        />
        <Editor
          value={content}
          onChange={setContent}
          className={styles.editor}
        />
        <button className={styles.btn}>Create post</button>
      </form>
    </div>
  )
}
