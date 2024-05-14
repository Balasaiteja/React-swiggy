import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
   <section className="topBarSection">
    <div className='companyTitle'>
        <Link to='/' className='link'>
        <h2>SWIGGY</h2>
        </Link>
    </div>
    <div className='searchBar'>
        <input className='input1'  type="text"  placeholder=' Search....' />
       
    </div>
    <div className='userAuth'>
        Login / Signup
    </div>

   </section>
  )
}

export default TopBar
