import React from 'react'
import { social } from '../constants'

const Social = ({page}) => {
  return (
    <div className={`${page}__social`}>
        {social.map((element) => (
            <a href={element.link} key={element.id} className={`${page}__social-icon`} target='_blank' rel="noreferrer">
                <i className={`${element.icon}`}></i>
            </a>
        ))}
    </div>
  )
}

export default Social