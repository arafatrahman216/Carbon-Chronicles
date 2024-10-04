import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='navbar-div'>
        <header className="header">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/efda1b2678a23eac5492c620715cf8734a23c2dd5cfd991e97f14edea0d743d4?placeholderIfAbsent=true&apiKey=ca50078de52f4a899ab7e2a421a65d3f" alt="Carbon Chronicles Logo" className="logo" />
            <h1 className="brand-name">Carbon Chronicles</h1>
            <nav className="nav-menu">
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/calculator" className='nav-link'>Calculator</Link>
              <Link to="/explore" className='nav-link'>Explore</Link>
              <Link to="/heatmap" className='nav-link'>HeatMap</Link>
              <Link to="/join" className='nav-link'>Join Us</Link>
            </nav>
          </header>
    </div>
  )
}
