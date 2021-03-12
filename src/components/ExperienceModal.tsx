import React from 'react'

import { TiDelete } from "react-icons/ti";
import { Button } from './Button';

export const ExperienceModal = () => {
  return (
    <form className="form">
      <h2 className="title">Experiência</h2>
      <p><TiDelete/></p>

      <div className="inputForm">
        <label htmlFor="jobTitle">Título/Cargo</label>
        <input type="text" id="jobTitle"/>
      </div>
      <div className="inputForm">
        <label htmlFor="company">Empresa</label>
        <input type="text" id="company"/>
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
        <label htmlFor="endDate">Data de saída</label>
        <input type="text" id="endDate"/>
        <input type="checkbox"/>
        <p>É o meu emprego atual</p>
      </div>
      <div className="inputForm">
        <label htmlFor="descriptionOfActivities">Descrição das atividades</label>
        <input type="text" id="descriptionOfActivities"/>
      </div>
      <Button>Concluído</Button>
    </form>
  )
}
