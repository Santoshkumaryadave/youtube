import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <ul navbar_manu>
                <li className='navitem1'>All</li>
                <li className='navitem'>Music</li>
                <li className='navitem'>Live</li>
                <li className='navitem'>Comedy</li>
                <li className='navitem'>Movies</li>
                <li className='navitem'>Sport</li>
                <li className='navitem'>Hindi</li>
                <li className='navitem'>Bhojpuri</li>
                
            </ul>

        </nav>
    </div>
  )
}

export default Navbar