import React from 'react'
import { useState } from 'react'

const Message = () => {
    const [message, setMessage] = useState("Welcome Visitor")

    const handleClick=()=>{
        setMessage("Thank you for subscribing")
    }
  return (
    <div>
        <h1>State tutorials</h1>
        <p>{message}</p>
        <button onClick={()=>{handleClick()}}>Subscribe</button>
    </div>
  )
}

export default Message