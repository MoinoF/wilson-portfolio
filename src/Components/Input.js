import React from 'react';
import styles from './Input.module.css'

const Input = ({name, type}) => {
  return (
      <input className={styles.input} name={name} type={type} placeholder={name}/>
  )
}

export default Input