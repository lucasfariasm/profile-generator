import React from 'react';
import homeImage from '../assets/homeImage.png'

import styles from '../styles/pages/Home.module.css'

import { Button } from '../components/Button';

export function Home(){

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.titleLogo}>Simples, rápido, grátis e sem cadastro!</h1>
          <img src={homeImage} alt="Imagem Currículo"/>
        </div>

        <Button className={styles.button}>Começar</Button>
      </div>
    </div>
  )
} 