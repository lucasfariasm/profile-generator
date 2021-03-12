import React, { useState } from 'react';
// import { TiDelete } from "react-icons/ti";

import styles from '../styles/components/Experience.module.css'

export function Experience(){
  const [value, setValue] = useState('+')

  function toggleSection(){
    setValue(value === "+" ? "-" : "+")
  }

  return (
    <form>
      <div className="title">
        <h2>Experiência</h2>
        <p onClick={toggleSection}>{value}</p>
      </div>
      <button 
        style={value === '-'? {display: 'block'} : {display: 'none'}}
        type="button"
        className={styles.addExperience}
      >+</button>
    </form>
  )
}