import React, { useState } from 'react';
// import { TiDelete } from 'react-icons/ti';

import styles from '../styles/components/Experience.module.css'
import { AcademicModal } from './AcademicModal';

export function Academic(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState('+')

  function toggleSection(){
    setValue(value === "+" ? "-" : "+")
  }

  function handleOpenModal(){
    setIsModalOpen(true);
  }

  function handleCloseModal(){
    setIsModalOpen(false);
  }

  return (
    <form>
      <div className="title">
        <h2>Formação Acadêmica</h2>
        <p onClick={toggleSection}>{value}</p>
      </div>
      <button 
        style={value === '-'? {display: 'block'} : {display: 'none'}}
        type="button"
        className={styles.addExperience}
        onClick={handleOpenModal}
      >
        +
      </button>
      {isModalOpen && <AcademicModal closeModal={handleCloseModal}/>}
    </form>
  )
}