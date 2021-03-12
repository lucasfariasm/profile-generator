import React, { useState } from 'react';
// import { TiDelete } from 'react-icons/ti';

import styles from '../styles/components/Skills.module.css'

export function Skills(){
  const [value, setValue] = useState('+')

  function toggleSection(){
    setValue(value === "+" ? "-" : "+")
  }

  return (
    <form>
      <div className="title">
        <h2>Habilidades</h2>
        <p onClick={toggleSection}>{value}</p>
      </div>
      <div
        className="inputForm"
        id={styles.formSkill}
        style={value === '-'? {display: 'block'} : {display: 'none'}}
      >
        <input type="text"/>
        <button type="button" className={styles.addSkill}>+</button>
      </div>
    </form>
  )
}