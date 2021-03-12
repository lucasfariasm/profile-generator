import React from 'react'

import { TiDelete } from "react-icons/ti";
import { Button } from './Button';

export const AcademicModal = () => {
  return (
    <form className="form">
      <h2 className="title">Formação Acadêmica</h2>
      <p><TiDelete/></p>

      <div className="inputForm">
        <label htmlFor="degree">Diploma</label>
        <input type="text" id="degree"/>
      </div>
      <div className="inputForm">
        <label htmlFor="institution">Instituição</label>
        <input type="text" id="institution"/>
      </div>
      <div className="inputForm">
        <label htmlFor="localization">Localização</label>
        <input type="text" id="localization"/>
      </div>
      <div className="inputForm">
        <label htmlFor="startDate">Data de início</label>
        <input type="text" id="startDate"/>
      </div>
      <div className="inputForm">
        <label htmlFor="endDate">Data de graduação</label>
        <input type="text" id="endDate"/>
        <input type="checkbox"/>
        <p>Em andamento</p>
      </div>
      <div className="inputForm">
        <label htmlFor="descriptionOfActivities">Adicional</label>
        <input type="text" id="descriptionOfActivities"/>
      </div>
      <Button>Concluído</Button>
    </form>
  )
}
