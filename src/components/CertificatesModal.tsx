import React from 'react'

import styled from '../styles/components/CertificatesModal.module.css'

import { TiDelete } from "react-icons/ti";
import { Button } from './Button';

interface ModalProps {
  closeModal: () => void;
}

export const CertificatesModal = ({closeModal}: ModalProps) => {
  return (
    <div className={styled.overlay}>
      <form className="form" id={styled.form}>
        <h2 className="title">Certificados e Cursos</h2>
        <p className={styled.outModal} onClick={closeModal}><TiDelete size={30}/></p>

        <div className="inputForm">
          <label htmlFor="title">Título</label>
          <input type="text" id="title"/>
        </div>
        <div className={styled.institutionalConclusion}>
          <div className="inputForm">
            <label htmlFor="institution">Instituição</label>
            <input type="text" id="institution"/>
          </div>
          <div className="inputForm">
            <label htmlFor="conclusionDate">Data de conclusão</label>
            <input type="text" id="conclusionDate"/>
          </div>
        </div>
        <Button style={{margin: '0 auto'}}>Concluído</Button>
      </form>
    </div>
  )
}
