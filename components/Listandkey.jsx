import React from 'react'
import UpdateList from './UpdateList'
const arr=[
    {
        id:1,
        name:"Sujay"
    },
    {
        id:2,
        name:"Itachi"
    }
]

const Listandkey = () => {
    console.log("I am in Listandkey");

  return (
    <div>
        <ul>
            {
                arr.map(({id,name})=>(
                    <li key={id}>{name}</li>))
            }
        </ul>
        <UpdateList  array={arr}/>
    </div>
  )
}

export default Listandkey;