import React from 'react'
import '../assets/css/cardCollection.css'

const CardCollection = (props)=>{
  return (
    <div className='collectionCard'>
        <div className='collectionImg'>
            <img src={props.urlImage} alt='' />
        </div>
        <h4>{props.bagName}</h4>
        <p>Explore</p>
    </div>
  )
}

export default CardCollection