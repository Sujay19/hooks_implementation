import React from 'react'

const header={
 fontSize:'72px',
 color:'blue'
}
const Inline = () => {
    console.log('Inline')
  return (
    <div>
    <h1 style={header}>Inline</h1>
    </div>
  )
}

export default Inline