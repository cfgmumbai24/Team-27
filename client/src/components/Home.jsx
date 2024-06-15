import React ,{useState} from 'react'

import Navbar from './Navbar'
import LoginPopup from './LoginPopup'
import WhatWeDo from './Whatwedo';

const Home = () => {
    
  const [showLogin,setShowLogin]=useState(false);
  return (<>
      
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/> 
      <WhatWeDo/>
      </div>
      </>
  )
}

export default Home
