import React, { useState } from 'react';
// import { TiDelete } from 'react-icons/ti';

import styles from '../styles/components/Experience.module.css'
import { CertificatesModal } from './CertificatesModal';

export function Certificates(){
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
        <h2>Certificados e cursos</h2>
        <p onClick={toggleSection}>{value}</p>
      </div>
      <button
        style={value === '-'? {display: 'block'} : {display: 'none'}}
        type="button"
        className={styles.addExperience}
        onClick={handleOpenModal}
      >+</button>

    {isModalOpen && <CertificatesModal closeModal={handleCloseModal} />}
    </form>
  )
}