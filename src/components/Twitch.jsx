import React from 'react'
import { base } from '../constants'

const Twitch = () => {
  return (
    <div className="twitch">
        <iframe
        src={`https://player.twitch.tv/?channel=${base.twitch}&parent=${base.parent}&muted=true`}
        allowFullScreen
        className='embed'
        title='embed'
        >
        </iframe>
    </div>
  )
}

export default Twitch