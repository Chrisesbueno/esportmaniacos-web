import React from 'react'
import { Menu, Social } from '../index'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__container container">
            <Menu page='footer' />
            <Social page='footer' />
        </div>
        <p className="footer__copy">@chrisesbueno</p>
    </div>
  )
}

export default Footer