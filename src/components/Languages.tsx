import React, { useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import styles from '../styles/components/Language.module.css'

interface Language {
  id: number;
  title: string;
}

export function Languages(){
  const [value, setValue] = useState('+')
  const [languages, setLanguages] = useState<Language[]>([])
  const [newLanguageTitle, setNewLanguageTitle] = useState('')

  function toggleSection(){
    setValue(value === "+" ? "-" : "+")
  }

  function addLanguage(){
    if(newLanguageTitle === '')return

    setLanguages([...languages, {
      id: Math.random(),
      title: newLanguageTitle
    }])

    setNewLanguageTitle('');
  }

  function removeLanguage(id: number){
    const updatedLanguages = languages.filter(language => language.id !== id)

    setLanguages(updatedLanguages)
  }

  return (
    <form>
      <div className="title">
        <h2>Idiomas</h2>
        <p onClick={toggleSection}>{value}</p>
      </div>
      <div
        className="inputForm"
        id={styles.formAddLanguage}
        style={value === '-'? {display: 'block'} : {display: 'none'}}
      >
        <input
          type="text"
          placeholder="Idioma - Nível"
          onChange={e => setNewLanguageTitle(e.target.value)}
          value={newLanguageTitle}
        />
        <button 
          type="button"
          className={styles.addLanguage}
          onClick={addLanguage}
        >+</button>
      </div>
      <ul style={value === '-'? {display: 'block'} : {display: 'none'}}>
        {languages.map(language => (
          <li
            className={styles.inputLanguage}
            key={language.id}
            id={styles.formRemoveLanguage}
          >
            <p>{language.title}</p>
            <button
              type="button"
              className={styles.removeLanguage}
              onClick={() => removeLanguage(language.id)}>
              <TiDelete size={20}/>
            </button>
          </li>
        ))}
      </ul>
    </form>
  )
}