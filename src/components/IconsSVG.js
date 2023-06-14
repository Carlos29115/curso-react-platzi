import React from 'react'
import { ReactComponent as CheckSVG } from './presentationals/layout/check.svg';
import { ReactComponent as DeleteSVG } from './presentationals/layout/delete.svg';

const iconTypes = {
    'check': <CheckSVG className={`containerTwo__actions containerTwo__actions--Done 
        `}/>,
    'delete': <DeleteSVG className={'containerTwo__actions'}/>
}

function IconsSVG({type}) {
  return (
    <span>
        {iconTypes[type]}
    </span>
  )
}

export {IconsSVG}
