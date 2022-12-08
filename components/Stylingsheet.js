import React from 'react'

const Stylingsheet = (props) => {
    const className=props.primary?'primary':''
  return (
    <div className={className}>Stylingsheet</div>
  )
}

export default Stylingsheet