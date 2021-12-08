import React from 'react'
import '../assets/css/sectionProduits.css'
import BoutonJaune from './BoutonJaune'
import Produits from './Produits'
import datas from '../assets/database'

const sectionProduits = ()=>{
  return (
    <div className='sectionProduits'>
      <BoutonJaune value='Produits'/>
      <span><p>Summer collection</p></span>
      <div className='produits'>
        {datas.map((data) => {
          return <Produits urlImage={data.url} name={data.name} price={data.price} />
        })}
      </div>
    </div>
  )
}

export default sectionProduits


