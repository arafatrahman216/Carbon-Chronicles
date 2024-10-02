import React from 'react'
import "./Bg3.css"
import {Link} from "react-router-dom"

export default function Bg3() {
  return (
    <div>
        <section className="energy-stats">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/068e5178cc238b845896e463a1f81732bf380d27e89f4f471fa53b8d597924c4?placeholderIfAbsent=true&apiKey=ca50078de52f4a899ab7e2a421a65d3f" alt="" className="background-image" />
          <div className="content-wrapper">
            <div className="stats-container">
              <div className="main-stats">
                <div className="stats-row">
                  <div className="stat-card energy-consumed">
                    <h2 className="stat-title">Energy Consumed</h2>
                    <p className="stat-value">222.2</p>
                    <p className="stat-unit">kWh</p>
                  </div>
                  <div className="stat-card emissions-produced">
                    <h2 className="stat-title">Emissions produced</h2>
                    <p className="stat-value">94.28</p>
                    <div className="emissions-unit">
                      <span className="stat-unit">kg eq. CO</span>
                      <sup>2</sup>
                    </div>
                  </div>
                </div>
                <div className="secondary-stats">
                  <div className="stats-row">
                    <div className="stat-card emission-increased">
                      <h2 className="stat-title">Emission Increased</h2>
                      <p className="stat-value">+12%</p>
                      <p className="stat-unit">Compared to last year</p>
                    </div>
                    <div className="stat-card global-temperature">
                      <h2 className="stat-title">Global Temperature</h2>
                      <div className="temperature-value">
                        <span className="stat-value">+1.4</span>
                        <sup>o</sup>
                        <span>C</span>
                      </div>
                      <p className="stat-unit">Since Preindustrial</p>
                    </div>
                  </div>
                </div>
              </div>
              <aside className="stories-section">
                <h2 className="stories-title">Stories of Change : From Industrial Revolution to Now</h2>
                <p className="stories-description">Explore the key events that shaped our carbon emissions and learn how we can rewrite the future.</p>
                <button className="explore-button">Explore Stories</button>
              </aside>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-info">
                <div className='footer-links'>
                  <Link to="/contactus" className="footer-link">Contact us</Link>
                  <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                  <Link to="/credit" className="footer-link">Credit</Link>
                </div>
              </div>
            </div>
            <hr className="footer-divider" />
            <p className="footer-copyright">© 2024 Carbon Chronicles. All rights reserved.</p>
          </footer>
        </section>
    </div>
  )
}
