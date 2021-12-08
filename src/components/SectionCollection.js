import React from 'react'
import '../assets/css/sectionCollection.css'
import BoutonJaune from './BoutonJaune'
import Collection from './CardCollection'

const sectionCollection = ()=>{
  return (
    <div className='bodyContainer'>
      <section className='section1'>
        <BoutonJaune value='Collection'/>
        <p>See more --></p>
      </section>
      <section className='section2'>
        <Collection bagName='Sac 1' urlImage='https://checkmybags.netlify.app/static/media/bandouliere-back-to-school.0750d39c.jpg'/>
        <Collection bagName='Sac en cuir 1' urlImage='https://checkmybags.netlify.app/static/media/bandouliere-poignee-metal-et-bi-matiere.8bdd8c3c.jpg' />
        <Collection bagName='Sac en cuir 2' urlImage='https://checkmybags.netlify.app/static/media/cabas-bi-matiere-poche-devant-avec-foulard.2187cb46.jpg' />
        <Collection bagName='Sac bretelles' urlImage='https://checkmybags.netlify.app/static/media/sac-cabas-detail-tresse.8647209d.jpg' />
        <Collection bagName='Sac valise' urlImage='https://checkmybags.netlify.app/static/media/shopper-bi-matiere-details-clous.dc3e1894.jpg' />
      </section>
    </div>
  )
}

export default sectionCollection