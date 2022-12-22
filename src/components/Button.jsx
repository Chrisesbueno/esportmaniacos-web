import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({link, title, icon}) => {
  return (
    <div>
        <NavLink to={`${link}`} className='button button--flex' >
          {title}
          <i className={`${icon} icon-social`}></i>
        </NavLink>
    </div>
  )
}

export default Button