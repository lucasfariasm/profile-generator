import React from 'react';

import '../styles/components/PersonalData.module.css'

export function PersonalData(){
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

  return (
    <form>
      <div className="title">
        <h2>Dados Pessoais</h2>
        <p>+</p>
      </div>
      {formFields.map(({id, label, type}) => <div className="inputForm" key={id}>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} />
      </div>)}
      <label htmlFor="resume">Resumo</label> 
      <textarea rows={10}
        id="resume" 
        className="textarea" 
      />
      {/* <label>
        Nome Completo
        <input className={styles.form} type="text"/>
      </label>
      <label>
        Telefone/Celular
        <input className={styles.form} type="text"/>
      </label>
      <label>
        Cidade / Estado
        <input className={styles.form} type="text"/>
      </label>
      <label>
        E-mail
        <input className={styles.form} type="text"/>
      </label>
      <label>
        Linkedin
        <input className={styles.form} type="text"/>
      </label>
      <label>
        Github
        <input className={styles.form} type="text"/>
      </label>
      <label>
        Ocupação
        <input className={styles.form} type="text"/>
      </label>
      <label>
        Resumo
        <textarea className={styles.form} />
      </label> */}
    </form>
  )
}