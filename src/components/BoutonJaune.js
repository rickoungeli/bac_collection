import React from 'react'
import '../assets/css/boutonJaune.css'

const boutonJaune = (props)=>{
  return (
    <div className='boutonJaune'>
      <p>{props.value}</p>
    </div>
  )
}

export default boutonJaune