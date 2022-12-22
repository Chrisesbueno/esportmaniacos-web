import React from 'react'
import { sorteo } from '../constants'

const Sorteo = () => {
  return (
    <div className='sorteo'>
        <div className="container">
            <div className="sorteo__content">
                <img src={sorteo.img} alt="" />
            </div>
        </div> 
    </div>
  )
}

export default Sorteo