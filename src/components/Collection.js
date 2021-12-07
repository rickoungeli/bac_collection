import React from 'react'
import '../assets/css/Collection.css'
import Collection from './CardCollection'

const Body = ()=>{
  return (
    <div className='bodyContainer'>
      <section className='section1'>
        <p>Collection</p>
        <p>See more --></p>
      </section>
      <section className='sectionCollection'>
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </section>
    </div>
  )
}

export default Body