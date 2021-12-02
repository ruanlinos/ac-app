import React from 'react';
import { icons } from '../assets/icons';
import Icons from './Icons';

// import { Container } from './styles';


interface ButtonProps{
  title?: string;
  icon?: keyof typeof icons;
}

export function Button({title, icon}: ButtonProps) {
  return (
    <div>
      {icon ? <Icons name={icon} /> : null}
      {title ? <span>{title}</span> : null}
    </div>
  )
}