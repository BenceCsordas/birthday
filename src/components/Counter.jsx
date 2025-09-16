import React from 'react'

export const Counter = ( {count}) => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"10px"}}>
      <p style={{color:"white"}}>persons: {count}</p>      
    </div>
  )
}


