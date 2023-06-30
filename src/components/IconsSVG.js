import React from 'react'
import { ReactComponent as CheckSVG } from './presentationals/layout/check.svg';
import { ReactComponent as DeleteSVG } from './presentationals/layout/delete.svg';


function IconsSVG({type, color, completed}) {
  const iconTypes = {
      'check': (color)=> <CheckSVG fill={completed ? color : '#ffffff'} className={`containerTwo__actions containerTwo__actions--Done 
          `}/>,
      'delete': (color)=> <DeleteSVG fill={color} className={'containerTwo__actions'}/>
  }
  return (
    <span>
        {iconTypes[type](color)}
    </span>
  )
}

export {IconsSVG}
