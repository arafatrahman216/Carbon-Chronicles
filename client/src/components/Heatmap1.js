import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const HeatMap1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://www.bls.gov/lau/
    csv("/data1.csv").then(counties => {
      setData(counties);
    });
  }, []);

  const colorScale = scaleQuantile()
    .domain(data.map(d => d.unemployment_rate))
    .range([
      "#FF0400",
      "#4A4208",
      "#0A0040",
      "#635963",
      "#9E6C20",
      "#1DBFA4",
      "#A985FF",
      "#FFC07D",
      "#FF8661"
    ]);

  return (
    <>
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            const cur = data.find(s => s.id === geo.id);
            return (
              <Geography
              key={geo.rsmKey}
                geography={geo}
                fill={cur ? colorScale(cur.unemployment_rate) : "#EEE"}
                />
            );
        })
    }
      </Geographies>
    </ComposableMap>
    
    </>
  );
};

export default HeatMap1;
