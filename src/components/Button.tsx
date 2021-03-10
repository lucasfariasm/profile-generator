import React, { ButtonHTMLAttributes} from 'react';
import {GoArrowRight} from 'react-icons/go'

import '../styles/components/Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({children, ...rest}: ButtonProps){
  return (
    <button type="button" {...rest}>
      {children}<GoArrowRight/>
    </button>
  )
}