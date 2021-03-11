import React from 'react';
// import { TiDelete } from 'react-icons/ti';
import styles from '../styles/components/Language.module.css'

export function Languages(){
  return (
    <form>
      <div className="title">
        <h2>Idiomas</h2>
        <p>+</p>
      </div>
      <div className="inputForm" id={styles.formLanguage}>
        <input type="text"/>
        <button type="button" className={styles.addLanguage}>+</button>
      </div>
    </form>
  )
}