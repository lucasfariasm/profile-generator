import React, { useState } from 'react';
// import { TiDelete } from 'react-icons/ti';
import styles from '../styles/components/Language.module.css'

export function Languages(){
  const [value, setValue] = useState('+')

  function toggleSection(){
    setValue(value === "+" ? "-" : "+")
  }

  return (
    <form>
      <div className="title">
        <h2>Idiomas</h2>
        <p onClick={toggleSection}>{value}</p>
      </div>
      <div
        className="inputForm"
        id={styles.formLanguage}
        style={value === '-'? {display: 'block'} : {display: 'none'}}
      >
        <input type="text"/>
        <button type="button" className={styles.addLanguage}>+</button>
      </div>
    </form>
  )
}