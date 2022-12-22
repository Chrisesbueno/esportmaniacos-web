import React from 'react'
import { NavLink } from 'react-router-dom'
import { menu } from '../constants'

const Menu = ({page}) => {
    return (
        <ul className={`${page}__list grid`}>
          {menu.map((element) => (
            <NavLink to={`/${element.link}`} className={`${page}__link`} activeclassname={`active`} key={element.id}>
              {element.title}
            </NavLink>
          ))}
        </ul>
      )
}
export default Menu