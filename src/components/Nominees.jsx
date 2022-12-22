import React, { useEffect, useState } from 'react'
import Nominee from './Nominee'

const Nominees = ({origin, globalCounter, handleGlobalCounter, local}) => {
    const [selected, setSelected] = useState('')
    const [data, setData] = useState([])
    const [ids, setIds] = useState('')
    
    const saveData = (table, database) => { 
        localStorage.setItem( table, JSON.stringify(database))
      }
      
    useEffect(() => { 
        setIds(local)
        saveData(ids, data);
     }, [data, ids])

  return (
    <div className='nominees__container grid'>
        {origin.map(nominee => (
            <Nominee {...nominee} key={nominee.id} active={selected} handleClick={setSelected} handleData={setData} data={data} counter={globalCounter} handleCounter={handleGlobalCounter}/>
        ))}
    </div>
    
  )
}

export default Nominees

