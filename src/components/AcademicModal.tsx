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
            <input placeholder="Diploma" type="text"/>
          </div>
          <div className="inputForm">
            <input placeholder="Instituição" type="text"/>
          </div>
        </div>
        <div className="inputForm">
          <input placeholder="Localização" type="text"/>
        </div>
        <div
          className={styled.titleCompany}
        >
          <div className="inputForm">
            <input placeholder="Data de início" type="text"/>
          </div>
          <div className="inputForm">
            <input placeholder="Data de graduação" type="text"/>
            <div className={styled.checkbox}>
              <input type="checkbox"/>
              <p>Em andamento</p>
            </div>
            
          </div>
        </div>
        <div className="inputForm">
          <input placeholder="Adicional" type="text"/>
        </div>
        <Button style={{margin: '0 auto'}}>Concluído</Button>
      </form>
    </div>
  )
}
