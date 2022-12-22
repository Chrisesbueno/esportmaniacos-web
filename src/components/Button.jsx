import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({link, title, icon}) => {
  return (
    <div>
        <Link reloadDocument to={`${link}`} className='button button--flex' >
          {title}
          <i className={`${icon} icon-social`}></i>
        </Link>
    </div>
  )
}

export default Button