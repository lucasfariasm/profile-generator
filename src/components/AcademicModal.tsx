import React from 'react'

import styled from '../styles/components/AcademicModal.module.css'

import { TiDelete } from "react-icons/ti";
import { Button } from './Button';

interface ModalProps {
  closeModal: () => void;
}

export const AcademicModal = ({closeModal}: ModalProps) => {
  return (
    <div className={styled.overlay}>
      <form className="form" id={styled.form}>
        <h2 className="title">Formação Acadêmica</h2>
        <p
          className={styled.outModal}
          onClick={closeModal}
        >
          <TiDelete size={30}
        />
        </p>

        <div
          className={styled.titleCompany}
        >
          <div className="inputForm">
            <label htmlFor="degree">Diploma</label>
            <input type="text" id="degree"/>
          </div>
          <div className="inputForm">
            <label htmlFor="institution">Instituição</label>
            <input type="text" id="institution"/>
          </div>
        </div>
        <div className="inputForm">
          <label htmlFor="localization">Localização</label>
          <input type="text" id="localization"/>
        </div>
        <div
          className={styled.titleCompany}
        >
          <div className="inputForm">
            <label htmlFor="startDate">Data de início</label>
            <input type="text" id="startDate"/>
          </div>
          <div className="inputForm">
            <label htmlFor="endDate">Data de graduação</label>
            <input type="text" id="endDate"/>
            <div className={styled.checkbox}>
              <input type="checkbox"/>
              <p>Em andamento</p>
            </div>
            
          </div>
        </div>
        <div className="inputForm">
          <label htmlFor="descriptionOfActivities">Adicional</label>
          <input type="text" id="descriptionOfActivities"/>
        </div>
        <Button style={{margin: '0 auto'}}>Concluído</Button>
      </form>
    </div>
  )
}
