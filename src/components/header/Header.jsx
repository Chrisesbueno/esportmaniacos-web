import React from 'react'
import { base, sponsors } from '../../constants'
import { Menu, Slider } from '../../components'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div className="header">
        <nav className="nav container">
            <div className="nav__container">
              <Link to='/' className='nav__logo'>
                <img src={base.logo} alt="" />
              </Link>
              <Slider origin='nav' base={sponsors} />
            </div>

            <div className="nav__menu">
                <Menu page='nav' />
            </div>
        </nav>
    </div>
  )
}

export default Header