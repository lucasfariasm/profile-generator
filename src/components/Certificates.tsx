import React from 'react';
// import { TiDelete } from 'react-icons/ti';

import styles from '../styles/components/Experience.module.css'

export function Certificates(){
  return (
    <form>
      <div className="title">
        <h2>Certificados e cursos</h2>
        <p>+</p>
      </div>
      <button type="button" className={styles.addExperience}>+</button>
    </form>
  )
}