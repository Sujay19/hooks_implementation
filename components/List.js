import React from 'react'
import Personlist from './Personlist'
import Image from 'next/image'
import image from "../assets/antikey.png";

const List = () => {
  const list=['clark','sujay','itachi']
  const persons=[
    {
      name:"sujay",
      id:1,
      skill:'React'
    },
    {
      name:"Itachi",
      id:2,
      skill:"Next"
    },
    {
      name:"Naruto",
      id:3,
      skill:"Node"
    }
  ]
  const namelist= list.map((name,index)=><h1 key={index}>{index}{name}</h1>)
  const personlist=persons.map(({name,skill,id})=><Personlist key={id} name={name} skill={skill}/>);
  return (
    <div>
     {/* <h1>{list[0]}</h1>
     <h1>{list[1]}</h1>
     <h1>{list[2]}</h1> */}
     {
      personlist
     }
     {
      namelist
     }
     <div>
      <Image src={image} objectFit='contain'/>
     </div>
    </div>
  )
}

export default List