import React from 'react'

const EventChild = ({handleClick}) => {
  return (
    <div>
        <button onClick={handleClick}>Subcribe</button>
    </div>
  )
}

export default EventChild