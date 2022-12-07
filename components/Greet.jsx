import React from 'react'
// name,heroname
const Greet = (props) => {
  console.log("Hi")
  return (
    // <div>{`Hello ${name}! a.k.a ${heroname}`}</div>
    <div>
    Hello {props.name}! a.k.a {props.heroname}
    {
      props.children
    }
    
    </div>
  )
}

export default Greet