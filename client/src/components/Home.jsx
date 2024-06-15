import React ,{useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import LoginPopup from './LoginPopup'
import WhatWeDo from './Whatwedo';
import Videoplayer from './Videoplayer';

const Home = () => {
    
  const [showLogin,setShowLogin]=useState(false);
  return (<>
      
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/> 
      <Videoplayer/>
      <WhatWeDo/>
      <Footer/>
      </div>
      </>
  )
}

export default Home