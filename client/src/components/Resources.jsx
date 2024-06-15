import React,{useState} from 'react'
import ExploreMenu from '../components/ExploreMenu'
import './Resources.css'
import { Link } from 'react-router-dom'
const Resources = () => {
    
    const[category,setCategory]=useState('All');
  return (

    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Link to='/' className='home'>Home</Link>
    </div>
  )
}

export default Resources
