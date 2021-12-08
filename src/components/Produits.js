import React from 'react'
import '../assets/css/produits.css'


const produits = (props)=>{
  return (
    <div className='containerProduits'>
      
      <div className='cardProduit'>
        <div className='cardProduitDescription'>
          <h5>{props.name}</h5>
          <form>
            <label>colors : </label>
            <input type='radio' id='colorOption'/>
            <input type='radio' id='colorOption'/>
            <input type='radio' id='colorOption'/>
            <input type='hidden' value={props.id} />
          </form>
          <p>{props.price} $</p>
          <button>SHOP IT</button>
        </div>
        <div className='cardProduitImage'>
          <img src={props.urlImage} alt="sac"/>
        </div>

      </div>
      
    </div>
  )
}

export default produits