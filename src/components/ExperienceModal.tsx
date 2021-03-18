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
            <label htmlFor="jobTitle">Título/Cargo</label>
            <input type="text" id="jobTitle"/>
          </div>
          <div className="inputForm">
            <label htmlFor="company">Empresa</label>
            <input type="text" id="company"/>
          </div>
        </div>
        <div className="inputForm">
          <label htmlFor="localization">Localização</label>
          <input type="text" id="localization"/>
        </div>

        <div className={styled.titleCompany}>
          <div className="inputForm">
            <label htmlFor="startDate">Data de início</label>
            <input type="text" id="startDate"/>
          </div>
          <div className="inputForm">
            <label htmlFor="endDate">Data de saída</label>
            <input type="text" id="endDate"/>
            <div className={styled.checkbox}>
              <input type="checkbox"/>
              <p>É o meu emprego atual</p>
            </div>
          </div>
        </div>
        
        <div className="inputForm">
          <label htmlFor="descriptionOfActivities">Descrição das atividades</label>
          <input type="text" id="descriptionOfActivities"/>
        </div>
        <Button style={{margin: '0 auto'}}>Concluído</Button>
      </form>
    </div>
  )
}
