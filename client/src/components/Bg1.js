import React from 'react'
import "./Bg1.css"
import {Link} from "react-router-dom"

export default function Bg1() {
  return (
    <div>
        <section className="hero-section">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/417993d2b3ea0e5d58a9e2e9a973b9caee571092d405b5e7de3d04f14a9b6bd2?placeholderIfAbsent=true&apiKey=ca50078de52f4a899ab7e2a421a65d3f" alt="" className="hero-background" />
          
          <div className="hero-content">
            <h2 className="hero-title">Track, Learn, and Act for a Sustainable Future</h2>
            <p className="hero-description">Empowering you to reduce your carbon footprint with data-driven tools and powerful stories.</p>
            <Link to="/explore" className="cta-button-1">Explore</Link>
          </div>
          
          <div className="feature-content">
            <h2 className="feature-title">Track Your Carbon Impact, Visualize Your Journey</h2>
            <p className="feature-description">Discover your carbon footprint, explore data visually, and dive into a sustainable future.</p>
            <Link to="/calculate" className="feature-button">Calculate Footprint</Link>
          </div>
        </section>
    </div>
  )
}
