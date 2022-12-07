import React from 'react'
import { useState } from 'react';
import EventChild from './EventChild';
const Eventbind = () => {
    const [parent, setParent] = useState("Parent");
    const handleClick=(child)=>{
        alert(`Hello ${parent} from ${{child}}`);
    }
  return (
    <div>
        <EventChild handleClick={handleClick}/>
    </div>
  )
}

export default Eventbind