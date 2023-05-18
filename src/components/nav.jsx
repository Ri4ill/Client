import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Foother from './foother'
const Nav = () => {
  return (
  <>
    <div className='header'>
        <h2>Richard.dev</h2>
          <div className='nav'>
          <div><NavLink to='/' style={{ textDecoration:'none' , color: 'black'}}>Home</NavLink></div>
          <div><NavLink to='/About' style={{ textDecoration:'none', color: 'black' }}>About</NavLink></div>
          <div><NavLink to='/Project' style={{ textDecoration:'none', color: 'black' }}>Project</NavLink></div>
          <div><NavLink to='/Contact' style={{ textDecoration:'none', color: 'black' }}>Contact</NavLink></div>
        </div>
    </div>
    <div className="conatiner">
      <Outlet/>
    </div>
    {/*<Foother/>*/}
  </>
  )
}

export default Nav