import React from 'react'

import { TiDelete } from "react-icons/ti";
import { Button } from './Button';

export const CertificatesModal = () => {
  return (
    <form className="form">
      <h2 className="title">Certificados e Cursos</h2>
      <p><TiDelete/></p>

      <div className="inputForm">
        <label htmlFor="title">Título</label>
        <input type="text" id="title"/>
      </div>
      <div className="inputForm">
        <label htmlFor="institution">Instituição</label>
        <input type="text" id="institution"/>
      </div>
      <div className="inputForm">
        <label htmlFor="conclusionDate">Data de conclusão</label>
        <input type="text" id="conclusionDate"/>
      </div>
      <Button>Concluído</Button>
    </form>
  )
}
