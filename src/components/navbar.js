import React from 'react'
import './navbar.css'

export default function Navbar({search, setSearch}) {
  function handleSearch(e){
    setSearch(e.target.value)
  }

  return (
    <nav>
        <label className='logo'>GitHub</label>
        <input type='checkbox' id='barsCheck'/>
        <label htmlFor='barsCheck'className='barsCheckIcon'>
            <i className='fas fa-bars'></i>
        </label>
        

        <ul>
            <li><input type="text" className='navbarSearch' value={search} placeholder='Search' onChange={handleSearch}></input></li>
            <li ><a className='navbarText' href='#'>Pull requests</a></li>
            <li ><a className='navbarText' href='#'>Issues</a></li>
            <li ><a className='navbarText' href='#'>Marketplace</a></li>
            <li ><a className='navbarText' href='#'>Explore</a></li>
        </ul>
    </nav>
  )
}
