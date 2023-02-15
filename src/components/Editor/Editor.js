import ReactQuill from 'react-quill'
import styles from './editor.module.scss'

export default function Editor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  }
  return (
    <div className={styles.editorContainer}>
      <ReactQuill
        value={value}
        theme={'snow'}
        onChange={onChange}
        modules={modules}
        className={styles.editor}
        placeholder="Write something here"
      />
    </div>
  )
}
