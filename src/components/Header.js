import React from 'react'
import '../assets/css/Header.css'
import ImgPencil from '../assets/images/pencil.png'

const Header = ()=>{
  return (
    <div className='headerContainer'>
      <div className='logo'>
        <p>TRENDY BAG</p>
        <div><img src={ImgPencil} alt="pencil" /></div>
      </div>
      <div className='navBar'>
          <nav>
              <ul>
                  <li>Collection</li>
                  <li>Products</li>
                  <li>Philosophy</li>
              </ul>
          </nav>
          <div><span>0</span></div>
      </div>
    </div>
  )
}

export default Header