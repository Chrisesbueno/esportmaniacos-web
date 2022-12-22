import React from 'react'
import { base } from '../constants'

const Award = ({first, second, third, origin}) => {
  return (
    <div className={`award__container${origin}`}>
        <img src={base.corona} alt="" className={`award__img${origin}`}/>
        <div className={`award__title${origin}`}>
            <p className={`award__first${origin}`}>{first}</p>
            <h1 className={`award__second${origin}`}>{second}</h1>
            <p className={`award__third${origin}`}>{third}</p>
        </div>
    </div>
  )
}

export default Award