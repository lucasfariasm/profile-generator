import React from 'react'

import styled from '../styles/components/ExperienceModal.module.css'

import { TiDelete } from "react-icons/ti";
import { Button } from './Button';

interface ModalProps {
  closeModal: () => void;
}

export const ExperienceModal = ({closeModal}: ModalProps) => {
  return (
    <div className={styled.overlay}>
      <form className="form" id={styled.form}>
        <h2 className="title">Experiência</h2>
        <p 
          className={styled.outModal}
          onClick={closeModal}
        >
          <TiDelete size={30}/>
        </p>

        <div className={styled.titleCompany}>
          <div className="inputForm">
            <input placeholder="Título/Cargo" type="text"/>
          </div>
          <div className="inputForm">
            <input placeholder="Empresa" type="text"/>
          </div>
        </div>
        <div className="inputForm">
          <input placeholder="Localização" type="text"/>
        </div>

        <div className={styled.titleCompany}>
          <div className="inputForm">
            <input placeholder="Data de início" type="text"/>
          </div>
          <div className="inputForm">
            <input placeholder="Data de saída"type="text"/>
            <div className={styled.checkbox}>
              <input type="checkbox"/>
              <p>É o meu emprego atual</p>
            </div>
          </div>
        </div>
        
        <div className="inputForm">
          <input placeholder="Descrição das atividades" type="text"/>
        </div>
        <Button style={{margin: '0 auto'}}>Concluído</Button>
      </form>
    </div>
  )
}
