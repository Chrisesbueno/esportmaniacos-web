import React from 'react'
import './home.css'
import { base, buttons } from '../../constants'
import { Button, Social, Sorteo, Twitch, Twitter, Youtube } from '../../components'

const Home = () => {
  return (
    <div className='home__father'>
      <div className='home__container container section'>
        <Twitch />
        <div className="home__content">
          <div className="home__content-title">
            <img src={base.corona} alt="" />
            <div className='titles'>
              <p className='title__first'>{base.title.first}</p>
              <h1 className='title__second'>{base.title.second}</h1>
              <p className='title__third'>{base.title.third}</p>
            </div>
          </div>
          <Social page='home' />
          <Button link={buttons[0].link} title={buttons[0].title} icon={buttons[0].icon} />
        </div>
      </div>
      <div className="section">
        <Sorteo  />
        <div className="home__present section container">
          <Twitter />  
          <Youtube />  
        </div>
      </div>
    </div>

  )
}

export default Home