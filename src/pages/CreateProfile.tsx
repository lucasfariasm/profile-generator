import React from 'react';

import { Academic } from '../components/Academic';
import { Button } from '../components/Button';
import { Certificates } from '../components/Certificates';
import { Experience } from '../components/Experience';
import { Languages } from '../components/Languages';
import { PersonalData } from '../components/PersonalData';
import { Skills } from '../components/Skills';

import styles from '../styles/pages/CreateProfile.module.css'

export function CreateProfile(){
  return (
    <div>
      <div className={styles.topCreate}>
        <div className={styles.titleCreateProfile}>
          <h1>Inserir informações</h1>
        </div>
      </div>
      <div className={styles.form}>
        <PersonalData />
        <Experience />
        <Academic />
        <Certificates />
        <Skills />
        <Languages />
      </div>
      <Button className={styles.button}>Gerar Currículo</Button>
    </div>
  )
}