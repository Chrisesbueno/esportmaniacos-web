import React, { createRef, useEffect } from 'react'
import { Award } from '../../components'
import { base, premios } from '../../constants'
import { useScreenshot, createFileName } from 'use-react-screenshot'
import './votes.css'

const Votes = () => {

  const arrayVotes = [
    JSON.parse(localStorage.getItem('premio-1')),
    JSON.parse(localStorage.getItem('premio-2')),
    JSON.parse(localStorage.getItem('premio-3')),
    JSON.parse(localStorage.getItem('premio-4')),
    JSON.parse(localStorage.getItem('premio-5')),
    JSON.parse(localStorage.getItem('premio-6')),
    JSON.parse(localStorage.getItem('premio-7')),
    JSON.parse(localStorage.getItem('premio-8')),
    JSON.parse(localStorage.getItem('premio-9')),
    JSON.parse(localStorage.getItem('premio-10')),
    JSON.parse(localStorage.getItem('premio-11')),
    JSON.parse(localStorage.getItem('premio-12')),
  ]

  const ref = createRef(null)
  const [image, takeScreenShot] = useScreenshot()

  const download = (image, { name = 'img', extension = 'png' } = {}) => {
    const a = document.createElement('a')
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
  }

  const getImage = () => takeScreenShot(ref.current)

  useEffect(() => {
    if (image) {
      download(image, { name: 'premios-esportmaniacos', extension: 'png' })
    }
  }, [image])

  return (
    
    <div className='votes section' id='capture' ref={ref}>
      <button className='descargar button button--flex' onClick={getImage} >
        {`Descargar votos`}
        <i className='bx bxs-download'></i>
      </button>
      <div className="container votes__container">
        {arrayVotes.map((vote, index) => (
        <div className='vote grid' key={index}>
          {vote.map(item => (
            <div className="vote__container" key={item.id}>
            {item.img ? (
              <img src={item.img} alt="" />
            ) : (
              <img src={base.logo} alt="" />
            )}
            <div className="vote__content">
              <h1>{item.name}</h1>
              {item.twitter && (<a href={item.twitter}><i className='bx bxl-twitter'></i></a>)}
            </div>
          </div>
          ))}
        </div>
        
        ))}
      </div>
      <div className="titles__votes container">
        {premios.map((premio) => (
          <Award origin={`-vote`} first={premio.first} second={premio.second} third={premio.third} key={premio.id} /> 
        ))}
      </div>
    </div>
  )
}

export default Votes