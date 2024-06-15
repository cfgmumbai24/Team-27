import React,{useState} from 'react'
import ExploreMenu from '../components/ExploreMenu'

import { Link } from 'react-router-dom'
const Resources = () => {
    
    const[category,setCategory]=useState('All');
  return (

    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Link to='/'>Home</Link>

    </div>
  )
}

export default Resources
