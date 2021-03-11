import React from 'react';
// import { TiDelete } from 'react-icons/ti';

import styles from '../styles/components/Skills.module.css'

export function Skills(){
  return (
    <form>
      <div className="title">
        <h2>Habilidades</h2>
        <p>+</p>
      </div>
      <div className="inputForm" id={styles.formSkill}>
        <input type="text"/>
        <button type="button" className={styles.addSkill}>+</button>
      </div>
    </form>
  )
}