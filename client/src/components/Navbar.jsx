import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'



const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState('home')

  return (
    <div className="navbar-container">
    <div className='Navbar'>
    <Link to='/'><img src={logo} alt="" className='logo'/></Link>
    <ul className="navbar-menu">
    <Link to='/' onClick={()=>setMenu('home')}className={menu==='home'?"active":''}>Home</Link>
    <Link to='/resources' onClick={()=>setMenu('resources')}className={menu==='resources'?"active":''}>Resources</Link>
        <Link to='/donation' onClick={()=>setMenu('donation')}className={menu==='donation'?"active":''}>Donation</Link>
    </ul>
    <div className="navbar-right">
        
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
    </div>
    </div>
    </div>
  )
}
export default Navbar
