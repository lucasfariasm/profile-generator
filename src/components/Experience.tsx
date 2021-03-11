import React from 'react';
// import { TiDelete } from "react-icons/ti";

import styles from '../styles/components/Experience.module.css'

export function Experience(){
  return (
    <form>
      <div className="title">
        <h2>Experiência</h2>
        <p>+</p>
      </div>
      <button type="button" className={styles.addExperience}>+</button>
    </form>
  )
}