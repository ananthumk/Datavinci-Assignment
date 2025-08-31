import React from 'react'
import menu from '../../assests/SVG.png'
import logo from '../../assests/logo.png'
import profile from '../../assests/Vector.png'
import bag from '../../assests/bag.png'
import search from '../../assests/search.png'



import './Header.css'

const Header = () => {
  return (
    <div className='section-header'>
         <img src={menu} alt='menu-bar' className='menu-icon' />
         <img src={logo} alt='logo' className='logo-icon' />
         <div className='sidebar-container'>
         <img src={profile} alt='logo' className='icon' />
             
         <img src={search} alt='logo' className='icon' />

         <img src={bag} alt='logo' className='icon' />

         </div>
    </div>
  )
}

export default Header