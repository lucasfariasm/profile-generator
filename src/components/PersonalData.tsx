import React, { useState } from 'react';

import styles from '../styles/components/PersonalData.module.css'

export function PersonalData(){
  const [value, setValue] = useState('+')

  const formFields = [
    {
      id: 'nome',
      label:'Nome Completo',
      type: 'text'
    },
    {
      id: 'cel',
      label:'Telefone/Celular',
      type: 'number'
    },
    {
      id: 'location',
      label:'Cidade/Estado',
      type: 'text'
    },
    {
      id: 'email',
      label:'E-mail',
      type: 'email'
    },
    {
      id: 'linkedin',
      label:'Linkedin',
      type: 'text'
    },
    {
      id: 'github',
      label:'Github',
      type: 'text'
    },
    {
      id: 'occupation',
      label:'Ocupação',
      type: 'text'
    },
  ]

  function toggleSection(){
    setValue(value === "+" ? "-" : "+")
  }

  return (
    <form>
      <div className="title">
        <h2>Dados Pessoais</h2>
        <p onClick={toggleSection}>{value}</p>
      </div>
      {formFields.map(({id, label, type}) => <div
        className={'inputForm'}
        id={styles.inputForm}
        key={id}
        style={value === '-'? {display: 'block', transition: 'transform .2s'} : {display: 'none', transition: 'transform .2s'}}
      >
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} />
      </div>)}
      <div style={value === '-'? {display: 'block', transition: 'transform 0.2s'} : {display: 'none', transition: 'transform 0.2s'}} className={styles.resumo}>
        <label htmlFor="resume">Resumo</label> 
        <textarea rows={10}
          id="resume" 
          className="textarea" 
        />
      </div>
    </form>
  )
}