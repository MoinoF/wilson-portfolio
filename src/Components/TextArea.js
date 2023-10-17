import React from 'react';
import styles from './TextArea.module.css'

const TextArea = ({name}) => {
  return (
    <textarea className={styles.textarea} name={name} placeholder={name}/>
  )
}

export default TextArea