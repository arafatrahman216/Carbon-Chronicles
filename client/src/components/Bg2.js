import React from 'react'
import "./Bg2.css"

export default function Bg2() {
  return (
    <div>
        <section className="carbon-emissions-section">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/77e5374e4898c6d98541ce89126a19fbf2bc9f44e9f125fb30a3d06214ec8b47?placeholderIfAbsent=true&apiKey=ca50078de52f4a899ab7e2a421a65d3f" alt="" className="background-image" />
          <article className="info-card">
            <h2 className="card-title">Interactive Heatmap</h2>
            <p className="card-description">Explore our interactive heatmap to see how carbon emissions vary across the globe. Dive into data by region and see the big picture.</p>
            <button className="cta-button-2">See Heatmap</button>
          </article>
          <article className="timeline-card">
            <h2 className="timeline-title">Travel Through Time: The Carbon Emissions Journey</h2>
            <p className="timeline-description">Discover key moments in our carbon history and how we can change the future.</p>
            <button className="timeline-button">Start your journey</button>
          </article>
        </section>
    </div>
  )
}
