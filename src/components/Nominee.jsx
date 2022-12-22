import React from 'react'
import { base } from '../constants'


const Nominee = ({id, twitter, img, name, active, handleClick, counter, handleCounter, handleData, data}) => {

  const newData = {
    id: id,
    name: name,
    twitter: twitter,
    img: img
  }

/*  */
  let compareData = data.map(item => {
    return [JSON.stringify(item), item]
  });
  let compareNew = new Map(compareData);
  let votes = [...compareNew.values()];
  const filterData = votes.filter(vote => vote.id === id)
/*  */

  return (
    <div 
      className='nominee'
    >
      <div className="nominee__container"> 
      {active !== id ? (
        <div className='desactive' 
          onClick={() => {
            handleClick(id)
            handleCounter(counter + 1)
            handleData([...filterData, newData])
          }}
        >
          {img ? (
            <img src={img} alt="" />
          ) : (
            <img src={base.logo} alt="" />
          )}
          <div className="nominee__content">
            <h1>{name}</h1>
            {twitter && (<a href={twitter}><i className='bx bxl-twitter'></i></a>)}
          </div>
        </div>
      ) : (
        <div className='active'>
          {img ? (
            <img src={img} alt="" />
          ) : (
            <img src={base.logo} alt="" />
          )}
          <div className="nominee__content">
            <h1>{name}</h1>
            {twitter && (<a href={twitter}><i className='bx bxl-twitter'></i></a>)}
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Nominee