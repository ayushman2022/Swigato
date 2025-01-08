import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

function Navbar() {
  return (
    <div className='navbar flex justify-between items-center p-3'>
      <img className='logo w-1/8 h-[4rem]' src={assets.logo} alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
