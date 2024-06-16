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
    <div className="navbar-center">
    <ul className="navbar-menu">
    <Link to='/' onClick={()=>setMenu('home')}className={menu==='home'?"active":''}>Home</Link>
    <Link to='/resources' onClick={()=>setMenu('resources')}className={menu==='resources'?"active":''}>Resources</Link>
        <Link to='/donation' onClick={()=>setMenu('donation')}className={menu==='donation'?"active":''}>Donation</Link>
    </ul>
    </div>
    <div className="navbar-right">

        <Link to="/register-form">
        <button>Student Registration</button>
        </Link>
        
        <Link to="/mentor-register-form">
        <button>Mentor Registration</button>
        </Link>
    </div>
    </div>
    </div>
  )
}
export default Navbar