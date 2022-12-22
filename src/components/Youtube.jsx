import React from 'react'
import { base } from '../constants'

const Youtube = () => {
  return (
    <div className='youtube'>
        <iframe
            src={`https://www.youtube.com/embed/${base.youtube}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
  )
}

export default Youtube