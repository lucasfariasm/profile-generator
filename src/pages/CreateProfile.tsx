import React, { useState } from 'react';

import { Academic } from '../components/Academic';
import { Button } from '../components/Button';
import { Certificates } from '../components/Certificates';
import { Experience } from '../components/Experience';
import { Languages } from '../components/Languages';
import { PersonalData } from '../components/PersonalData';
import { Skills } from '../components/Skills';

import { FaArrowUp } from "react-icons/fa";

// import { AcademicModal } from '../components/AcademicModal';

import styles from '../styles/pages/CreateProfile.module.css'

export function CreateProfile(){
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false)
    }
  };

  function handleComeBack() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>
      <div className={styles.topCreate} id="informations">
        <div className={styles.titleCreateProfile}>
          <h1>Inserir informações</h1>
        </div>
      </div>
      <div className="form" id={styles.form}>
        <PersonalData />
        <Experience />
        <Academic />
        <Certificates />
        <Skills />
        <Languages />
      </div>
      <Button className={styles.button}>Gerar Currículo</Button>
      {/* <AcademicModal /> */}
      
      <div className="comeBack"
      onClick={handleComeBack}
      style={{display: showScroll ? 'flex' : 'none'}}
      ><FaArrowUp/></div>
    </>
  )
}