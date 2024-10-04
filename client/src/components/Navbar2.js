import React from 'react'
import "./Navbar2.css"
import {Link} from 'react-router-dom';

export default function Navbar2() {
  return (
    <div className='navbar-div'>
        <nav className="navbar navbar-expand-lg">
            <h1 className="brand-name">Carbon Chronicles</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/calculator">Calculator</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/explore">Explore</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/heatmap">HeatMap</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/joinus">Join Us</Link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
