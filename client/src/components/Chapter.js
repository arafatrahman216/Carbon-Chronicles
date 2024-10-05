// App.js

import React, { useState, useEffect } from 'react';
import CO2Chart from './CO2Chart';
import axios from 'axios';
import { Spinner } from './Spinner';
import { Chart, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, Tooltip, Legend);

const Chapter = () => {
  const [ASCo2data, setASCo2data] = useState([]);
  const [ASCh4data, setASCh4data] = useState([]);
  const [yearData, setYearData] = useState([]);
  const [ fuelData, setFuelData] = useState([]);
  const [sectorData, setSectorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from your backend or NOAA API
    const fetchData = async () => {
      try {
        const responseASC = await axios.get('http://127.0.0.1:8000/fetch-co2-data/');
        setASCo2data(responseASC.data.data); // Assume this is the raw monthly data
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    //   try {
    //     const responseASC = await axios.get('http://127.0.0.1:8000/fetch-ch4-data/');
    //     setASCh4data(responseASC.data.data); // Assume this is the raw monthly data
    //     setLoading(false);
    //   } catch (error) {
    //     setError(error.message);
    //     setLoading(false);
    //   }
      try {
        const response = await axios.get('http://127.0.0.1:8000/fetch-emission-data/');
        setYearData(response.data.year_avg); // Assume this is the raw monthly data
        setFuelData(response.data.fuel_avg);
        setSectorData(response.data.sector_avg);
        setLoading(false);
      }
        catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    fetchData();
  }, []);

//   if (loading) return <Spinner />;
  if (loading) return <h1>Loading</h1>;
  if (error) return <p>Error: {error}</p>;


    const sectorChartData = {
        labels: Object.keys(sectorData),
        datasets: [{
            label: 'Average Emissions by Sector',
            data: Object.values(sectorData),
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
        }]
    };

    const fuelChartData = {
        labels: Object.keys(fuelData),
        datasets: [{
            label: 'Fuel Contribution to Emissions',
            data: Object.values(fuelData),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
    };

    const yearChartData = {
        labels: Object.keys(yearData),
        datasets: [{
            label: 'Yearly Average Emissions',
            data: Object.values(yearData),
            backgroundColor: 'rgba(153,102,255,0.4)',
            borderColor: 'rgba(153,102,255,1)',
        }]
    };

  return (
    <div className="App">
      <h2>Yearly data showing average CO<sub>2</sub> (ppm) values in Ascension Island, United Kingdom (ASC) from 1979 to 2023 </h2>
      <CO2Chart data={ASCo2data} />
      {/* <h2> Yearly data showing average CH<sub>4</sub> (ppm) values in Ascension Island, United Kingdom (ASC) from 1983 to 2023
       </h2>
        <CO2Chart data={ASCh4data} /> */}
    
        <h2>
            Yearly data showing average CO<sub>2</sub> emissions (kt) from 1970 to 2021
        </h2>
            <CO2Chart data={yearData} />

        <h2> Fuel Contribution to Emissions </h2>
        <div style={{ width: '30%', height: '30%' }}>
            <Pie data={fuelChartData} width={300} height={300} />
        </div>

        <h2> Sector Contribution to Emissions </h2>
        <div style={{ width: '100%', height: '50%' }}>
            <Bar data={sectorChartData}  width={300} height={50} />
        </div>
            
    </div>
  );
};

export default Chapter;
